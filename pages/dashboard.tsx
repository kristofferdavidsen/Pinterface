import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import Navbar from "../components/Navbar"
import { TempList } from "../components/TempList"
import { Temperature } from "../interfaces/Temperature"
import { connectToDatabase } from "../util/mongodb"

type DashboardProps = {
	temperatures: Array<Temperature>
	loginContext
}

const Dashboard: React.FC<DashboardProps> = ({
	temperatures,
	loginContext,
}) => {
	const router = useRouter()
	const { loggedIn } = useContext(loginContext)

	const validateLogin = () => {
		if (!loggedIn) {
			router.push("/?error=1")
		}
	}

	useEffect(() => {
		validateLogin()
	})

	return (
		<>
			<Navbar />
			{loggedIn && (
				<div className="container grid grid-cols-1 m-auto">
					<TempList temperatures={temperatures} />
				</div>
			)}
		</>
	)
}
export default Dashboard

export const getStaticProps: GetStaticProps = async (context) => {
	const { db } = await connectToDatabase()
	const temps = await db.collection("temperatur").find({}).toArray()

	return {
		props: {
			temperatures: JSON.parse(JSON.stringify(temps)),
		},
	}
}

import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { Navbar } from "../components/navbar/Navbar"
import { TempList } from "../components/TempList"
import { Temperature } from "../interfaces/Temperature"
import { connectToDatabase } from "../util/mongodb"
import Head from "next/head"
import { LoginContext } from "./_app"
import { CircularProgress, Box, useColorModeValue } from "@chakra-ui/react"

type DashboardProps = {
	temperatures: Array<Temperature>
}

const Dashboard: React.FC<DashboardProps> = ({ temperatures }) => {
	const router = useRouter()
	const { loggedIn } = useContext(LoginContext)

	useEffect(() => {
		if (!loggedIn) {
			router.push("/login?error=1&red=dashboard", "/login")
		}
	}, [loggedIn, router])

	return (
		<>
			<Head>
				<title>Dashboard - Pinterface</title>
				<meta name="viewport" content="initial-scale:1.0, width=device-width" />
			</Head>
			<Navbar />
			<Box
				bg={useColorModeValue("azure", "inherit")}
				minH="100vh"
				py="12"
				px={{ base: "4", lg: "8" }}
			>
				{loggedIn ? (
					<>
						<div className="container grid grid-cols-1 m-auto">
							<TempList temperatures={temperatures} />
						</div>
					</>
				) : (
					<>
						<CircularProgress isIndeterminate size="xl" />
					</>
				)}
			</Box>
		</>
	)
}
export default Dashboard

export const getStaticProps: GetStaticProps = async () => {
	const { db } = await connectToDatabase()
	const temps = await db.collection("temperatur").find({}).toArray()

	return {
		props: {
			temperatures: JSON.parse(JSON.stringify(temps)),
		},
		revalidate: 10,
	}
}

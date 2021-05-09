import Head from "next/head"
import { connectToDatabase } from "../util/mongodb"
import { useCallback, useContext, useEffect } from "react"
import Navbar from "../components/Navbar"
import Login from "../components/Login"
import { useRouter } from "next/router"
import toast, { Toaster } from "react-hot-toast"

type HomeProps = {
	isConnected: boolean
	loginContext: any
}

const Home: React.FC<HomeProps> = ({ isConnected, loginContext }) => {
	const { loggedIn, setLoggedIn, setLoggedOut } = useContext(loginContext)
	const router = useRouter()

	useEffect(() => {
		loggedIn === true && router.push("/dashboard?loggedIn=0")
		const { error } = router.query
		error === "1" && toast.error("Please log in.")
	}, [])

	const failedLogin = (errorMsg: string) => toast.error(errorMsg)
	return (
		<>
			<div>
				<Toaster position="top-center" />
			</div>
			<Head>
				<title>Dashboard</title>
				<meta
					name="viewport"
					content="initial-scale:1.0, width=device-width"
				></meta>
			</Head>
			<Navbar setLoggedOut={setLoggedOut} />
			<Login setLoggedIn={setLoggedIn} failedLogin={failedLogin} />
		</>
	)
}
export default Home

export async function getServerSideProps() {
	const { client } = await connectToDatabase()

	const isConnected = await client.isConnected()

	return {
		props: { isConnected },
	}
}

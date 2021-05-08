import Head from "next/head"
import { connectToDatabase } from "../util/mongodb"
import { useContext, useEffect } from "react"
import Navbar from "../components/Navbar"
import Login from "../components/Login"
import { useRouter } from "next/router"
import toast, { Toaster } from "react-hot-toast"

const Home = ({ isConnected, loginContext }) => {
	const { loggedIn, setLoggedIn, setLoggedOut } = useContext(loginContext)
	const router = useRouter()

	useEffect(() => {
		const { error } = router.query
		error === "1" && toast.error("Please log in.")
	}, [])

	return (
		<>
			<div>
				<Toaster position="bottom-center" />
			</div>
			<Head>
				<title>Dashboard</title>
				<meta
					name="viewport"
					content="initial-scale:1.0, width=device-width"
				></meta>
			</Head>
			<Navbar setLoggedOut={setLoggedOut} />
			<Login setLoggedIn={setLoggedIn} />
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

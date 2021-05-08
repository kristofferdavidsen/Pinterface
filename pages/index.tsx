import Head from "next/head"
import { connectToDatabase } from "../util/mongodb"
import { useContext } from "react"
import Navbar from "../components/Navbar"
import Login from "../components/Login"
import { NextPageContext } from "next"

const Home = ({ isConnected, loginContext }) => {
	const value = useContext(loginContext)

	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta
					name="viewport"
					content="initial-scale:1.0, width=device-width"
				></meta>
			</Head>
			<Navbar />
			<Login />
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

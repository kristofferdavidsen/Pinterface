import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { Navbar } from "../components/navbar/Navbar"
import { Dashboard } from "../components/dashboard/Dashboard"
import Head from "next/head"
import { CircularProgress, Box, useColorModeValue } from "@chakra-ui/react"
import { GetServerSidePropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import { getAppCookies, verifyToken } from "../util/jwttoken"
import { connectToDatabase } from "../util/mongodb"

type DashboardProps = {
	profile: any
	devices: any
}

const DashboardPage: React.FC<DashboardProps> = ({ profile, devices }) => {
	const router = useRouter()
	useEffect(() => {
		if (!profile) {
			router.push("/login?error=1&red=dashboard", "/login")
		}
	}, [profile, router])

	return (
		<>
			<Head>
				<title>Dashboard - Pinterface</title>
				<meta name="viewport" content="initial-scale:1.0, width=device-width" />
			</Head>
			<Navbar profile={profile} />
			<Box
				bg={useColorModeValue("azure", "inherit")}
				minH="100vh"
				py="12"
				px={{ base: "4", lg: "8" }}
			>
				{profile ? (
					<Dashboard devices={devices} />
				) : (
					<>
						<CircularProgress isIndeterminate size="xl" />
					</>
				)}
			</Box>
		</>
	)
}
export default DashboardPage

export async function getServerSideProps(
	context: GetServerSidePropsContext<ParsedUrlQuery>
) {
	const { req } = context
	const { token } = getAppCookies(req)
	const profile: any = token ? verifyToken(token.split(" ")[1]) : null
	const { db } = await connectToDatabase()
	const data: Array<any> =
		profile &&
		(await db
			.collection("devices")
			.find({ usernameRef: profile.username })
			.toArray())

	return {
		props: {
			profile,
			devices: JSON.parse(JSON.stringify(data)),
		},
	}
}

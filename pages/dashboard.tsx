import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { Navbar } from "../components/navbar/Navbar"
import { Dashboard } from "../components/dashboard/Dashboard"
import Head from "next/head"
import { LoginContext } from "./_app"
import { CircularProgress, Box, useColorModeValue } from "@chakra-ui/react"

type DashboardProps = {
	
}

const DashboardPage: React.FC<DashboardProps> = () => {
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
					<Dashboard/>
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

import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Head from "next/head"
import { useToast } from "@chakra-ui/toast"
import { Box } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/color-mode"

const Home: React.FC = () => {
	const toast = useToast()

	useEffect(() => {
		const cookieItem = window.localStorage.getItem("cookie-info")
		console.log(cookieItem)
		if (!cookieItem) {
			toast({
				status: "info",
				title: "Cookies & data",
				description:
					"This website stores cookies and data in your browser for a better user experience =)",
				isClosable: true,
				onCloseComplete: () =>
					window.localStorage.setItem("cookie-info", String(true)),
				duration: 10000,
				position: "top",
				variant: "solid",
			})
		}
	})

	return (
		<>
			<Head>
				<title>Index - Pinterface</title>
				<meta
					name="viewport"
					content="initial-scale:1.0, width=device-width"
				></meta>
			</Head>
			<Navbar />
			<Box
				bg={useColorModeValue("azure", "inherit")}
				minH="100vh"
				py="12"
				px={{ base: "4", lg: "8" }}
			>
				<p>Home</p>
			</Box>
		</>
	)
}
export default Home

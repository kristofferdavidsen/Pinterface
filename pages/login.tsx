/* eslint-disable */

import { NextRouter, useRouter } from "next/router"
import { useEffect } from "react"
import Head from "next/head"
import { Navbar } from "../components/navbar/Navbar"
import Login from "../components/login/Login"
import { useToast } from "@chakra-ui/react"

const LoginPage: React.FC = () => {
	const router: NextRouter = useRouter()
	const toast = useToast()

	useEffect(() => {
		const { error, red } = router.query
		if (error === "1" && red === "dashboard") {
			toast({
				status: "error",
				title: "Please log in.",
				duration: 4000,
				variant: "subtle",
			})
		}
	}, []) //exhaustive deps, but I don't want to trigger this effect more than once.

	const failedLogin = (errorMsg: string) => {
		toast({
			title: errorMsg,
			duration: 4000,
			status: "error",
			variant: "subtle",
			position: "top",
		})
	}
	return (
		<>
			<Head>
				<title>Login - Pinterface</title>
				<meta name="viewport" content="width=device-width"></meta>
			</Head>
			<Navbar />
			<Login failedLogin={failedLogin} />
		</>
	)
}
export default LoginPage

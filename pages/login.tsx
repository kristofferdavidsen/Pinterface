/* eslint-disable */

import { NextRouter, useRouter } from "next/router"
import { useContext, useEffect } from "react"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Login from "../components/login/Login"
import { LoginContext } from "../pages/_app"
import { useToast } from "@chakra-ui/react"

const LoginPage: React.FC = () => {
	const { loggedIn } = useContext(LoginContext)
	const router: NextRouter = useRouter()
	const toast = useToast()

	useEffect(() => {
		loggedIn === true && router.push("/dashboard")
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
		<div>
			<Head>
				<title>Login - Pinterface</title>
				<meta
					name="viewport"
					content="initial-scale:1.0, width=device-width"
				></meta>
			</Head>
			<Navbar />
			<div className="justify-center items-center m-auto">
				<Login failedLogin={failedLogin} />
			</div>
		</div>
	)
}
export default LoginPage

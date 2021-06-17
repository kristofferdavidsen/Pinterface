/* eslint-disable */

import { NextRouter, useRouter } from "next/router"
import { useContext, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Login from "../components/login/Login"
import { LoginContext } from "../pages/_app"

const LoginPage: React.FC = () => {
	const { loggedIn } = useContext(LoginContext)
	const router: NextRouter = useRouter()

	useEffect(() => {
		loggedIn === true && router.push("/dashboard")
		const { error, red } = router.query
		if (error === "1" && red === "dashboard") {
			toast.error("Please log in", { duration: 4000 })
		}
	}, []) //exhaustive deps, but I don't want to trigger this effect more than once.

	const failedLogin = (errorMsg: string) => toast.error(errorMsg)
	return (
		<div>
			<div>
				<Toaster position="top-center" />
			</div>
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

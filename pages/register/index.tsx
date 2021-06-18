import Head from "next/head"
import React from "react"
import Navbar from "../../components/Navbar"
import { Registration } from "../../components/registration/Registration"

type RegisterProps = {}

const RegisterPage: React.FC<RegisterProps> = () => {
	return (
		<>
			<Head>
				<title>Register - Pinterface</title>
				<meta name="viewport" content="initial-scale:1.0, width=device-width" />
			</Head>
			<Navbar />
			<Registration />
		</>
	)
}

export default RegisterPage

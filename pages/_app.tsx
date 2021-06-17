import { AppProps } from "next/app"
import React, { createContext, useState } from "react"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const [loggedIn, setLoggedIn] = useState(false)

	const login = () => setLoggedIn(true)
	const logout = () => setLoggedIn(false)

	return (
		<ChakraProvider>
			<LoginContext.Provider
				value={{
					loggedIn: loggedIn,
					setLoggedIn: login,
					setLoggedOut: logout,
				}}
			>
				<Component {...pageProps} loginContext={LoginContext} />
			</LoginContext.Provider>
		</ChakraProvider>
	)
}
export default MyApp

export const LoginContext = createContext({
	loggedIn: false,
	setLoggedIn: () => {},
	setLoggedOut: () => {},
})

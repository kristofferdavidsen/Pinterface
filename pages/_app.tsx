import { AppProps } from "next/app"
import React, { createContext, useState } from "react"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const [loggedIn, setLoggedIn] = useState<boolean>(false)
	const [username, setUsername] = useState<string>(null)

	const login = () => setLoggedIn(true)
	const logout = () => setLoggedIn(false)
	const user = (s: string) => setUsername(s)

	return (
		<ChakraProvider>
			<LoginContext.Provider
				value={{
					setUser: user,
					user: username,
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
	setUser: (s: string) => {},
	user: null,
	loggedIn: false,
	setLoggedIn: () => {},
	setLoggedOut: () => {},
})

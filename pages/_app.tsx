import { AppProps } from "next/app"
import { createContext, useState } from "react"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const LoginContext = createContext({
		loggedIn: false,
		setLoggedIn: () => {},
		setLoggedOut: () => {},
	})
	const [loggedIn, setLoggedIn] = useState(true)

	const login = () => setLoggedIn(true)
	const logout = () => setLoggedIn(false)

	return (
		<LoginContext.Provider
			value={{
				loggedIn: loggedIn,
				setLoggedIn: login,
				setLoggedOut: logout,
			}}
		>
			<Component {...pageProps} loginContext={LoginContext} />
		</LoginContext.Provider>
	)
}
export default MyApp

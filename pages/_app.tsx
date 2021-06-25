import { AppProps } from "next/app"
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
export default MyApp

import { Stack, Box } from "@chakra-ui/react"
import React, { useContext } from "react"
import { LoginContext } from "../../pages/_app"
import { MenuItem } from "./MenuItem"

type MenuLinksProps = {
	isOpen: boolean
}

export const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
	const { loggedIn, setLoggedOut } = useContext(LoginContext)

	const LoggedInIcon: React.FC = () => {
		return !loggedIn ? (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-label="Log in"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
				/>
			</svg>
		) : (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-label="Log out"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
				/>
			</svg>
		)
	}

	return (
		<Box
			display={{ base: isOpen ? "block" : "none", md: "block" }}
			flexBasis={{ base: "100%", md: "auto" }}
		>
			<Stack
				spacing={8}
				align="center"
				justify={["center", "space-between", "flex-end", "flex-end"]}
				direction={["column", "row", "row", "row"]}
				pt={[4, 4, 0, 0]}
			>
				<MenuItem to="/dashboard">Dashboard</MenuItem>
				<MenuItem to="/login" setLoggedOut={setLoggedOut}>
					<LoggedInIcon />
				</MenuItem>
			</Stack>
		</Box>
	)
}

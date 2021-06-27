import {
	Stack,
	Box,
	Switch,
	Tooltip,
	useColorMode,
	Text,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { MenuItem } from "./MenuItem"
import Cookies from "js-cookie"

type MenuLinksProps = {
	isOpen: boolean
	profile: any
}

export const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen, profile }) => {
	const setLoggedOut = () => {
		Cookies.remove("token")
	}
	const [hover, setHover] = useState<boolean>(false)
	const { toggleColorMode, colorMode } = useColorMode()
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
					{!profile ? "Log in" : "Log out"}
				</MenuItem>
				<Tooltip label="Toggle theme" isOpen={hover} mt="8">
					<Switch
						isChecked={colorMode === "dark" ? true : false}
						id="theme"
						size="lg"
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						onChange={toggleColorMode}
					/>
				</Tooltip>
			</Stack>
		</Box>
	)
}

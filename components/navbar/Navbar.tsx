import { useState } from "react"
import { Flex } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { MenuToggle } from "./MenuToggle"
import { MenuLinks } from "./MenuLinks"

/*
 * The navbar is inspired by this blog-post:
 * https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react/
 *
 */
export const Navbar: React.FC<{ profile?: any }> = ({ profile }) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			p={8}
			bg={"#11133C"}
			color={"#EDF5FA"}
		>
			<Logo />
			<MenuToggle isOpen={isOpen} toggle={toggle} />
			<MenuLinks isOpen={isOpen} profile={profile} />
		</Flex>
	)
}

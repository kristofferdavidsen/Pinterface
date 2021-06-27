import { useState } from "react"
import { Flex, useColorModeValue } from "@chakra-ui/react"
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
	const bg = useColorModeValue("white", "gray.800")
	const stext = useColorModeValue("orange.700", "orange.300")
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			p={8}
			bg={bg}
			color={stext}
			boxShadow="md"
		>
			<Logo />
			<MenuToggle isOpen={isOpen} toggle={toggle} />
			<MenuLinks isOpen={isOpen} profile={profile} />
		</Flex>
	)
}

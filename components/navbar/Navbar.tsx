import { useState } from "react"
import { Flex } from "@chakra-ui/react"
import { Logo } from "./Logo"
import { MenuToggle } from "./MenuToggle"
import { MenuLinks } from "./MenuLinks"

export const Navbar: React.FC = () => {
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
			<MenuLinks isOpen={isOpen} />
		</Flex>
	)
}

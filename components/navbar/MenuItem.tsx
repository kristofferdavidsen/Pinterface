import { ReactNode } from "react"
import { Button, Link } from "@chakra-ui/react"
import NextLink from "next/link"

type MenuItemProps = {
	to: string
	children: ReactNode
	setLoggedOut?: () => void
}

export const MenuItem: React.FC<MenuItemProps> = ({
	to = "/",
	children,
	setLoggedOut,
	...rest
}) => {
	return (
		<NextLink href={to} passHref>
			<Button
				as={Link}
				href={to}
				display="block"
				variant="link"
				color="inherit"
				{...rest}
				onClick={setLoggedOut}
			>
				{children}
			</Button>
		</NextLink>
	)
}

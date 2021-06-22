import { ReactNode } from "react"
import Link from "next/link"
import { Text } from "@chakra-ui/react"

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
		<Link href={to} passHref>
			<Text display="block" {...rest} onClick={setLoggedOut} cursor="pointer">
				{children}
			</Text>
		</Link>
	)
}

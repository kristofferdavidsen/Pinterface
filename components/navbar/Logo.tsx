import { Link, Button } from "@chakra-ui/react"
import NextLink from "next/link"

export const Logo: React.FC = (props: any) => {
	return (
		<NextLink href="/" passHref>
			<Button
				as={Link}
				display="block"
				color="inherit"
				fontSize="xl"
				variant="unstyled"
				fontWeight="bold"
				aria-label="Home page"
			>
				Pinterface
			</Button>
		</NextLink>
	)
}

import { Link, Button, Image, useColorMode } from "@chakra-ui/react"
import NextLink from "next/link"

export const Logo: React.FC = (props: any) => {
	const { colorMode } = useColorMode()
	return (
		<NextLink href="/" passHref>
			<Button
				as={Link}
				display="block"
				color="inherit"
				variant="unstyled"
				aria-label="Home page"
				size="lg"
			>
				<Image
					src={colorMode === "light" ? "/Frame1.png" : "/Frame2.png"}
					alt="Pinterface"
					boxSize="inherit"
				/>
			</Button>
		</NextLink>
	)
}

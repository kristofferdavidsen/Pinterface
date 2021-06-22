import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

export const Logo: React.FC = (props: any) => {
	return (
		<Box {...props}>
			<Link href="/" passHref>
				<Text fontSize="lg" fontWeight="bold" cursor="pointer">
					Pinterface
				</Text>
			</Link>
		</Box>
	)
}

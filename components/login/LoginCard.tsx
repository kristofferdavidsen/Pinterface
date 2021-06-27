import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react"

export const LoginCard: React.FC = (props: BoxProps) => {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.700")}
			py="8"
			px={{ base: "4", md: "10" }}
			boxShadow="md"
			rounded={{ sm: "lg" }}
			{...props}
		/>
	)
}

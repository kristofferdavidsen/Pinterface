import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react"

export const RegistrationCard: React.FC = (props: BoxProps) => {
	return (
		<Box
			bg={useColorModeValue("white", "gray.700")}
			py="8"
			px={{ base: "4", md: "10" }}
			shadow="base"
			rounded={{ sm: "lg" }}
			{...props}
		/>
	)
}

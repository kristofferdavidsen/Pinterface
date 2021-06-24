import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import { RegistrationForm } from "./RegistrationForm"
import { Card } from "../Card"

export const Registration: React.FC = () => {
	return (
		<Box
			bg={useColorModeValue("#EDF5FA", "inherit")}
			minH="100vh"
			py="12"
			px={{ base: "4", lg: "8" }}
		>
			<Box maxW="lg" mx="auto">
				<Heading
					mt="4"
					mb="8"
					textAlign="center"
					size="xl"
					fontWeight="extrabold"
				>
					Register a new account
				</Heading>
				<Card>
					<RegistrationForm />
				</Card>
			</Box>
		</Box>
	)
}

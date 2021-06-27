import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import { DeviceAccordion } from "./DeviceAccordion"

type DashboardProps = {
	devices: Array<any>
}

export const Dashboard: React.FC<DashboardProps> = ({ devices }) => {
	const text = useColorModeValue("gray.900", "gray.100")
	return (
		<Box minH="100vh" py="12" px={{ base: "4", lg: "8" }}>
			<Box maxW="md" mx="auto" color={text}>
				<Heading textAlign="center" size="xl" fontWeight="extrabold">
					Dashboard
				</Heading>
				<DeviceAccordion devices={devices} />
			</Box>
		</Box>
	)
}

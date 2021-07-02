import { Box, Heading, useColorModeValue } from "@chakra-ui/react"
import { DeviceAccordion } from "./DeviceAccordion"

type DashboardProps = {
	devices: Array<any>
}

export const Dashboard: React.FC<DashboardProps> = ({ devices }) => {
	const text = useColorModeValue("gray.900", "gray.100")
	return (
		<Box minH="100vh" py="12" px={{ base: "4", lg: "8" }}>
			<Heading textAlign="center" size="3xl" fontWeight="extrabold" pb="8">
				Dashboard
			</Heading>
			<Box maxW="lg" mx="auto" color={text}>
				<Heading textAlign="left" size="xl" fontWeight="bold" pb="4">
					Devices
				</Heading>
				<DeviceAccordion devices={devices} />
			</Box>
		</Box>
	)
}

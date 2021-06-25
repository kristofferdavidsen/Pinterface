import {
	Box,
	Stack,
	Skeleton,
	Heading,
	useColorModeValue,
} from "@chakra-ui/react"
import { DeviceAccordion } from "./DeviceAccordion"

type DashboardProps = {
	devices: Array<any>
}

export const Dashboard: React.FC<DashboardProps> = ({ devices }) => {
	return (
		<Box
			bg={useColorModeValue("EDF5FA", "inherit")}
			minH="100vh"
			py="12"
			px={{ base: "4", lg: "8" }}
		>
			<Box maxW="lg" width="auto">
				<Heading
					mt="4"
					mb="8"
					textAlign="center"
					size="xl"
					fontWeight="extrabold"
				>
					Dashboard
				</Heading>
				<DeviceAccordion devices={devices} />
			</Box>
		</Box>
	)
}

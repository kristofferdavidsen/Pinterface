import { Box, Heading, useColorModeValue, Select, Flex } from "@chakra-ui/react"
import { useState } from "react"
import { Device } from "../../interfaces/Device"
import { DeviceTab } from "./DeviceTab"
import { Stats } from "./Stats"
type DashboardProps = {
	devices: Array<Device>
}

export const Dashboard: React.FC<DashboardProps> = ({ devices }) => {
	const text = useColorModeValue("gray.900", "gray.100")
	const [device, setDevice] = useState<Device>(devices[0])
	return (
		<Box minH="100vh" px={{ base: "4", lg: "8" }}>
			<Flex
				align="center"
				justify="space-between"
				wrap="wrap"
				w="100%"
				p={8}
				borderBottom="2px"
				borderColor={useColorModeValue("inherit", "inherit")}
			>
				<Heading textAlign="left" size="2xl" fontWeight="extrabold">
					Dashboard
				</Heading>
				<Select
					size="md"
					maxW="xs"
					variant="outline"
					onChange={(e) =>
						setDevice(devices.find((d) => e.target.value === d.deviceId))
					}
				>
					{devices.map((device, index) => (
						<option key={index} value={device.deviceId}>
							{device.deviceId}
						</option>
					))}
				</Select>
			</Flex>
			<Flex align="left" wrap="wrap">
				<Box maxW="lg" mx="auto" color={text}>
					<Heading textAlign="left" size="xl" fontWeight="bold" pb="4">
						Data
					</Heading>
					<DeviceTab device={device} />
				</Box>

				<Box maxW="lg" mx="auto" color={text}>
					<Heading textAlign="left" size="xl" fontWeight="bold" pb="4">
						Stats
					</Heading>
					<Stats />
				</Box>
			</Flex>
		</Box>
	)
}

import {
	Text,
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	StatArrow,
	StatGroup,
	Skeleton,
	Box,
	Divider,
} from "@chakra-ui/react"
import { useEffect } from "react"
import { Device } from "../../interfaces/Device"
import { Humidity } from "../../interfaces/Humidity"
import useDeviceData from "../../util/useDevicedata"

export const HumidityTab: React.FC<{ device: Device }> = ({ device }) => {
	const { data, isLoading, isError } = useDeviceData(
		"humidity",
		device.deviceId
	)
	return isLoading ? (
		<Box>
			<Skeleton height="10px" />
			<Skeleton height="10px" />
			<Skeleton height="10px" />
		</Box>
	) : (
		<Box>
			{data.length > 0 ? (
				data.map((hum: Humidity, index: number) => (
					<StatGroup key={index}>
						<Stat>
							<StatLabel>{hum.date}</StatLabel>
							<StatNumber>{hum.humidity}℃</StatNumber>
						</Stat>
						<Divider p="2" />
					</StatGroup>
				))
			) : (
				<Text>No data available...</Text>
			)}
		</Box>
	)
}

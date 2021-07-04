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
import { Device } from "../../interfaces/Device"
import { Temperature } from "../../interfaces/Temperature"
import formatDate from "../../util/dateFormatting"
import useDeviceData from "../../util/useDevicedata"

export const TempTab: React.FC<{ device: Device }> = ({ device }) => {
	const { data, isLoading, isError } = useDeviceData(
		"temperature",
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
				data.map((temp: Temperature, index: number) => (
					<StatGroup key={index}>
						<Stat>
							<StatLabel>{formatDate(new Date(temp.date))}</StatLabel>
							<StatNumber>{temp.tempCelsius}℃</StatNumber>
						</Stat>
						<Stat>
							<StatLabel>{formatDate(new Date(temp.date))}</StatLabel>
							<StatNumber>{temp.tempFahrenheit}°F</StatNumber>
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

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
	Button,
	useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { Device } from "../../interfaces/Device"
import { Temperature } from "../../interfaces/Temperature"
import formatDate from "../../util/dateFormatting"
import useDeviceData from "../../util/useDevicedata"

export const TempTab: React.FC<{ device: Device }> = ({ device }) => {
	const { data, isLoading, isError } = useDeviceData(
		"temperature",
		device.deviceId
	)

	const toast = useToast()
	const [index, setIndex] = useState<number>(5)
	const reversed = !isLoading && [...data].reverse()

	const loadItems = () => {
		console.log(reversed.length)
		reversed.length <= index
			? toast({
					title: "No more items to load...",
					duration: 4000,
					position: "bottom",
					status: "warning",
					id: "maxitems",
			  })
			: setIndex(index + 5)
	}

	return isLoading ? (
		<Box>
			<Skeleton height="10px" />
			<Skeleton height="10px" />
			<Skeleton height="10px" />
		</Box>
	) : (
		<Box>
			{reversed.length > 0 ? (
				<Box>
					{reversed.slice(0, index).map((temp: Temperature, index: number) => (
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
					))}
					<Button onClick={loadItems} variant="outline">
						Load more items...
					</Button>
				</Box>
			) : (
				<Text>No data available...</Text>
			)}
		</Box>
	)
}

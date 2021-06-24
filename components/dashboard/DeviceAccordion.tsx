import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Stack,
	Skeleton,
} from "@chakra-ui/react"
import { Device } from "../../interfaces/Device"

type DevAccProps = {
	devices: Array<Device>
	isLoading: boolean
}

const DeviceItem: React.FC<{ id: string }> = ({ id }) => {
	return (
		<AccordionItem>
			<h2>
				<AccordionButton>
					<Box flex="1" textAlign="left">
						{id}
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb="4">
				{/* Tabs with temps, humidity etc. Depends on device properties. */}
				<p>Nothing here yet...</p>
			</AccordionPanel>
		</AccordionItem>
	)
}

export const DeviceAccordion: React.FC<DevAccProps> = ({
	devices,
	isLoading,
}) => {
	return (
		<>
			{isLoading ? (
				<Stack>
					<Skeleton height="20px" />
					<Skeleton height="20px" />
					<Skeleton height="20px" />
				</Stack>
			) : (
				<Accordion>
					{devices.map((device, index) => (
						<DeviceItem id={device.deviceId} key={index} />
					))}
				</Accordion>
			)}
		</>
	)
}

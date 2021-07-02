import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react"
import { Device } from "../../interfaces/Device"
import { HumidityTab } from "./HumidityTab"
import { PressureTab } from "./PressureTab"
import { TempTab } from "./TempTab"

type DevAccProps = {
	devices: Array<Device>
}

const DeviceItem: React.FC<{ device: Device }> = ({ device }) => {
	return (
		<AccordionItem>
			<h2>
				<AccordionButton>
					<Box flex="1" textAlign="left">
						{device.deviceId}
					</Box>
					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb="4">
				<Tabs>
					<TabList>
						{device.supportedMeasurements.temperature && (
							<Tab>Temperatures</Tab>
						)}
						{device.supportedMeasurements.humidity && <Tab>Humidity</Tab>}
						{device.supportedMeasurements.pressure && <Tab>Pressure</Tab>}
					</TabList>
					<TabPanels>
						<TabPanel>
							<TempTab device={device} />
						</TabPanel>
						<TabPanel>
							<HumidityTab />
						</TabPanel>
						<TabPanel>
							<PressureTab />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</AccordionPanel>
		</AccordionItem>
	)
}

export const DeviceAccordion: React.FC<DevAccProps> = ({ devices }) => {
	return (
		<Accordion allowToggle>
			{devices.map((device, index) => (
				<DeviceItem device={device} key={index} />
			))}
		</Accordion>
	)
}

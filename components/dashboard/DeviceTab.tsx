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
	useColorModeValue,
} from "@chakra-ui/react"
import { Device } from "../../interfaces/Device"
import { HumidityTab } from "./HumidityTab"
import { PressureTab } from "./PressureTab"
import { TempTab } from "./TempTab"

export const DeviceTab: React.FC<{ device: Device }> = ({ device }) => {
	return (
		<Tabs>
			<TabList>
				{device.supportedMeasurements.temperature && <Tab>Temperatures</Tab>}
				{device.supportedMeasurements.humidity && <Tab>Humidity</Tab>}
				{device.supportedMeasurements.pressure && <Tab>Pressure</Tab>}
			</TabList>
			<TabPanels>
				<TabPanel>
					<TempTab device={device} />
				</TabPanel>
				<TabPanel>
					<HumidityTab device={device} />
				</TabPanel>
				<TabPanel>
					<PressureTab />
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}

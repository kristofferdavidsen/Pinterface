import { Text } from "@chakra-ui/react"
import Cookies from "js-cookie"
import useSWR from "swr"
import { Device } from "../../interfaces/Device"
import useDeviceData from "../../util/useDevicedata"

export const TempTab: React.FC<{ device: Device }> = ({ device }) => {
	const { data, isLoading, isError } = useDeviceData(
		"temperature",
		device.deviceId
	)

	return <Text>{isLoading ? "Waiting..." : data.status}</Text>
}

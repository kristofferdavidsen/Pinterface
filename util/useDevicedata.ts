import Cookies from "js-cookie"
import useSWR from "swr"

const useDeviceData = (suburl: string, deviceId: string) => {
	const fetcher = (url: string) =>
		fetch(String(url), {
			method: "GET",
			mode: "no-cors",
		}).then((res) => res.json())
	const { data, error } = useSWR(
		`/api/device/${suburl}?token=${Cookies.get("token") ?? ""}&d=${
			deviceId ?? ""
		}`,
		fetcher
	)
	return {
		data: data,
		isLoading: !data && !error,
		isError: error,
	}
}
export default useDeviceData

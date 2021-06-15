export interface Device {
	deviceId: string
	usernameRef: string
	location: string
	supportedMeasurements: {
		humidity: boolean
		temperature: boolean
		pressure: boolean
		gyroscope: boolean
	}
}

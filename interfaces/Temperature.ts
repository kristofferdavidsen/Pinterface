export interface Temperature {
	tempCelsius: number
	tempFahrenheit?: number
	date: Date
	toString: () => string
}

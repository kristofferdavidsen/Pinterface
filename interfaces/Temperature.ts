export interface Temperature {
	tempCelsius: number
	tempFahrenheit?: number
	date: Date
	location?: String
	toString: () => string
}

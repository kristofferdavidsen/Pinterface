import { Temperature } from "../interfaces/Temperature"

type StatisticsProps = {
	temperatures: Array<Temperature>
}

export const Statistics: React.FC<StatisticsProps> = ({ temperatures }) => {
	const averageCels = () => {
		const sum: number = temperatures.reduce(
			(total, { tempCelsius }) => total + tempCelsius,
			0
		)
		return sum / temperatures.length
	}
	const averageFah = () => {
		const filtered: Array<Temperature> = temperatures.filter(
			(temp: Temperature) => temp.tempFahrenheit !== NaN
		)
		const sum: number = filtered.reduce(
			(total, { tempFahrenheit }) => total + tempFahrenheit,
			0
		)
		return (sum / filtered.length).toFixed(2)
	}

	return (
		<>
			<ul className="text-center">
				<li key="celsius">
					Gjennomsnittlig temperatur i celsius: {averageCels()}
				</li>
				<li key="fahrenheit">
					Gjennomsnittlig temperatur i fahrenheit: {averageFah()}
				</li>
			</ul>
		</>
	)
}

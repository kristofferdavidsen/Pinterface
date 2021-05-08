import { useState } from "react"
import { Temperature } from "../interfaces/Temperature"

export const TempList: React.FC<{ temperatures: Array<Temperature> }> = ({
	temperatures,
}) => {
	const [active, setActive] = useState<number>(1)
	const updateButton1 = () => setActive(1)
	const updateButton2 = () => setActive(2)
	return (
		<div className="container bg-blue-200 shadow-md rounded-md">
			<div className="grid grid-cols-2">
				<button
					onClick={updateButton1}
					className={`${
						active === 1 ? "bg-dark-blue text-off-white" : "bg-blue-300"
					} p-4 border-b-2 border-black`}
				>
					Temperaturer
				</button>
				<button
					onClick={updateButton2}
					className={`${
						active === 2 ? "bg-blue-300" : "bg-dark-blue text-off-white"
					} p-4 border-b-2 border-black`}
				>
					Statistikk
				</button>
			</div>
			{active ? (
				<div className="text-center">
					<ul>
						{temperatures.map((temp: Temperature, index: number) => (
							<li key={index}>
								<h1>Date: {temp.date}</h1>
								<h2>Celsius: {temp.tempCelsius}</h2>
								<h3>Fahrenheit: {temp.tempFahrenheit}</h3>
							</li>
						))}
					</ul>
				</div>
			) : (
				<div className="text-center">
					<p>Statistikk</p>
				</div>
			)}
		</div>
	)
}

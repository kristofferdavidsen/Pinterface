import { useState } from "react"
import { Temperature } from "../interfaces/Temperature"
import { Card } from "../components/Card"
import { Statistics } from "./Statistics"

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
						active === 1 ? "bg-blue-300" : "bg-dark-blue text-off-white"
					} p-4 border-b-2 border-black`}
				>
					Statistikk
				</button>
			</div>
			{active === 1 ? (
				<div className="text-center">
					<ul className="flex flex-row flex-wrap">
						{temperatures.map((temp: Temperature, index: number) => (
							<li className="p-2" key={index}>
								<Card data={temp} />
							</li>
						))}
					</ul>
				</div>
			) : (
				<div className="text-center">
					<Statistics temperatures={temperatures} />
				</div>
			)}
		</div>
	)
}

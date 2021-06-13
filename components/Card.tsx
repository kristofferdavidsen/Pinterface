type CardProps = {
	data: {
		date: Date
		tempCelsius: Number
		tempFahrenheit?: Number
		location?: String
	}
}

export const Card: React.FC<CardProps> = ({ data }) => {
	const formatDate = (date: Date) => {
		return `Dato: ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, kl. ${date.getHours()}.${date.getMinutes()}`
	}

	return (
		<div
			className={`flex flex-col rounded-lg shadow-lg overflow-hidden
            mb-3 transition duration-500`}
		>
			<div className="flex-1 bg-white p-6 flex flex-col justify-between">
				<div className="flex-1">
					<h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
						{formatDate(new Date(data.date)) ?? "Date not available"}
					</h3>
					<p className="mt-3 text-base leading-6 text-gray-500">
						Celsius: {data.tempCelsius ?? NaN}
					</p>
					<p className="mt-3 text-base leading-6 text-gray-500">
						Fahrenheit: {data.tempFahrenheit ?? NaN}
					</p>
				</div>
				<div className="flex mt-6 items-center justify-between">
					<div className="text-sm leading-5 text-gray-500">
						<p>Lokasjon: {data.location ?? "Unknown"}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

import { InsertOneWriteOpResult } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"
import { Temperature } from "../../../interfaces/Temperature"
import { verifyToken } from "../../../util/jwttoken"
import { connectToDatabase } from "../../../util/mongodb"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const token = req.query["token"].toString()
		const verified: any = token ? verifyToken(token.split(" ")[1], true) : null
		if (verified) {
			const { tempCelsius, tempFahrenheit, date, deviceId } = verified
			const body: Temperature = {
				tempCelsius: tempCelsius as number,
				tempFahrenheit: tempFahrenheit as number,
				date: new Date(date),
				deviceId: deviceId as string,
			}
			const { db } = await connectToDatabase()
			const doc: InsertOneWriteOpResult<any> = db
				.collection("temperature")
				.insertOne(body)
			res.status(200).json(doc.result.ok)
		} else {
			res.status(403).json(JSON.stringify("Not authorized"))
		}
	} catch (e) {
		res.status(403).json(JSON.stringify("Not authorized"))
	}
}

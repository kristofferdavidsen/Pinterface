import { NextApiRequest, NextApiResponse } from "next"
import { verifyToken } from "../../../util/jwttoken"
import { connectToDatabase } from "../../../util/mongodb"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const token = req.query["token"].toString()
	const device = req.query["d"].toString()
	const verified: any = token ? verifyToken(token.split(" ")[1]) : null
	if (verified) {
		try {
			const { db } = await connectToDatabase()
			const data = await db
				.collection("humidity")
				.find({ deviceId: device })
				.toArray()
			res.status(200).json(data)
		} catch (e) {
			res.status(404).end()
		}
	} else {
		res.status(403).json(JSON.stringify("Not authorized"))
	}
}

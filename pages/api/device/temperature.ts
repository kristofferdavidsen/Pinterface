import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../../util/mongodb"
import { verifyToken } from "../../../util/jwttoken"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const token = req.query["token"].toString()
	const device = req.query["d"].toString()
	const { db } = await connectToDatabase()
	const verified = token ? verifyToken(token.split(" ")[1]) : null
	if (verified) {
		try {
			const data = await db
				.collection("temperatur")
				.find({ deviceId: device })
				.toArray()
			res.status(200).json(data)
		} catch (e) {
			res.status(404).end()
		}
	} else {
		res.status(403).end()
	}
}

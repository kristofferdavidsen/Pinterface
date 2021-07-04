import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../util/mongodb"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { db } = await connectToDatabase()
	const body = JSON.parse(req.body)
	const exist = await db
		.collection("login")
		.findOne({ username: body.username })
	if (exist) {
		const eq = await bcrypt.compare(body.password, exist.password)
		if (eq) {
			const { JWT } = process.env
			const payload = {
				username: body.username,
			}
			const token = jwt.sign(payload, JWT, { expiresIn: 86400 })
			res.status(200).json({
				success: true,
				token: "Bearer " + token,
			})
		} else {
			res.status(404).end()
		}
	} else {
		res.status(404).end()
	}
}

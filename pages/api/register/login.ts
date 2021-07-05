import { InsertOneWriteOpResult } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../../util/mongodb"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	//TODO: CSRF-token på form.
	const { db } = await connectToDatabase()
	const body = JSON.parse(req.body)
	try {
		const doc: InsertOneWriteOpResult<any> = await db
			.collection("login")
			.insertOne(body)
		res.status(200).json(doc.result.ok)
	} catch (e) {
		res.status(500).json("Something went wrong while creating your account.")
	}
}

import { connectToDatabase } from "../../util/mongodb"

export default async function handler(req, res) {
	const { db } = await connectToDatabase()
	const body = JSON.parse(req.body)
	const exist = await db
		.collection("login")
		.findOne({ username: body.username, password: body.password })
	exist ? res.status(200).end() : res.status(404).end()
}

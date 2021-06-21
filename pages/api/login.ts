import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "../../util/mongodb"
import { setCookie } from "../../util/setCookie"
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
			setCookie(res, "login", true, {
				httpOnly: false,
				maxAge: 1000000000,
				sameSite: "lax",
				secure: true,
			})
			res.status(200).end(res.getHeader("Set-Cookie"))
		} else {
			res.status(401).end()
		}
	} else {
		res.status(401).end()
	}
}

import { IncomingMessage } from "http"
import jwt, { JwtPayload } from "jsonwebtoken"

const { JWT } = process.env

export const verifyToken = (token: string): string | JwtPayload => {
	try {
		return jwt.verify(token, JWT)
	} catch (e) {
		return null
	}
}

export function getAppCookies(req: IncomingMessage) {
	const parsedItems: any = {}
	if (req.headers.cookie) {
		const cookiesItems = req.headers.cookie.split("; ")
		cookiesItems.forEach((cookies) => {
			const parsedItem = cookies.split("=")
			parsedItems[parsedItem[0]] = decodeURI(parsedItem[1])
		})
	}
	return parsedItems
}

import { IncomingMessage } from "http"
import jwt, { JwtPayload } from "jsonwebtoken"

const { JWT } = process.env
const { JWT_DEVICE } = process.env

export const verifyToken = (
	token: string,
	device?: boolean
): string | JwtPayload => {
	try {
		return device ? jwt.verify(token, JWT_DEVICE) : jwt.verify(token, JWT)
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

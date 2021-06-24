import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    const { db } = await connectToDatabase()
    try {
        const data: Array<any> = await db.collection("devices").find({ usernameRef: id }).toArray()
        if (data.length === 0) {
            Error("No devices found")
        }
        res.status(200).json(data)
    } catch (e) {
        res.status(400).json(e)
    }
}
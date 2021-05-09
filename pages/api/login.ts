import { connectToDatabase } from "../../util/mongodb"
const express = require("express")
const app = express()
app.use(express.json())

app.post("/api/login", async function (req, res) {
	const { db } = await connectToDatabase()
	console.log(req.body)
	const exist = await db
		.collection("login")
		.find({ username: req.body.username, password: req.body.password })
	exist ? res.ok : res.status === 404
})

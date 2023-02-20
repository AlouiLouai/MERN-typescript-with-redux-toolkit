import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import "dotenv/config"

const app: Application = express()

//middlewares
app.use(express.json())
app.use(cors())
// here we'll put routes
import gameRoute from "./routes/gameRoute"

// here we will declate the routes paths
app.get('/', (req: Request, res: Response) => {
    res.send({ message: "IT works " })
})
app.use("/api/games", gameRoute)

export { app }

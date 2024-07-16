import express, { Request, Response, Application, json } from "express"
import { errorHandler } from "./middleware/errorHandler"
import countersRouter from "./routes/counters"

const app: Application = express()

app.use(json())
app.use((req, _res, next) => {
  console.log(`Received ${req.method} ${req.url}`)
  next()
})
app.use(errorHandler)

app.use("/counters", countersRouter)

export default app

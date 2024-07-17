import express, { Request, Response, Application, json } from "express"
import { errorHandler } from "./middleware/errorHandler"
import countersRouter from "./routes/counters"
import taskItemsRouter from "./routes/task-items"
import cors from "cors"

const app: Application = express()

app.use(cors())
app.use(json())
app.use((req, _res, next) => {
  console.log(`Received ${req.method} ${req.url}`)
  next()
})
app.use(errorHandler)

app.use("/counters", countersRouter)
app.use("/task-items", taskItemsRouter)

export default app

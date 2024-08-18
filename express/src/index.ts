import app from "./app"

const port: number = 8000

app.listen(port, () => {
  console.log(`Challenge was started at http://localhost:${port}`)
})

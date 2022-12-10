import 'reflect-metadata'
import dotenv from "dotenv"
import { app } from "./configs"
import "./database"
import "./shared/container"

dotenv.config()

const port = process.env.PORT ?? "3000"

app.listen(port, () => {
  console.log(`Server was running in port ${port}`)
})

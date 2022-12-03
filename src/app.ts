import 'reflect-metadata'
import './database'
import dotenv from "dotenv"
import { app } from "./configs"

dotenv.config()

const port = process.env.PORT ?? "3000"

app.listen(port, () => {
  console.log(`Server was running in port ${port}`)
})

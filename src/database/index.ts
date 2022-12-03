import { AppDataSource } from "../configs/ormconfig";

export default AppDataSource.initialize().then(() => {
  console.log('Success Connection on BD')
}).catch((error) => {
  console.log('Failed Connection, try again in few minutes or check your config')
})
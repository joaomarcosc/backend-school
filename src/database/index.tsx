import { AppDataSource } from "../../ormconfig";

AppDataSource.initialize().then(() => {
  console.log('Success Connection on BD')
}).then(() => {
  console.log('Failed Connection, try again in few minutes or check your config')
})
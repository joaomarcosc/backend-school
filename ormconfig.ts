import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASWORD,
  database: "school",
  entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
  migrations: [
    "./src/database/migrations/*.ts"
  ],
  logging: true,
  synchronize: false,
  migrationsRun: false,
})

// {
//   "type": "postgres",
//   "host": "localhost",
//   "port": 5432,
//   "username": "postgres",
//   "password": "postgres",
//   "database": "school",
//   "entities": [
//     "./src/modules/**/infra/typeorm/entities/*.ts"
//   ],
//   "migrations": [
//     
//   ],
//   "cli": {
//     "migrationsDir": "./src/database/migrations"
//   }
// }
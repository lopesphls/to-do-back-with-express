import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: process.env.PORT ? +process.env.PORT : undefined,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

import 'dotenv/config';
import express, { Request, Response, json, urlencoded } from 'express';
import 'reflect-metadata';
import { AppDataSource } from './database/dataSource';

function Server() {
  const app = express();

  const port = process.env.PORT || 3000;

  app.use(urlencoded({ extended: true }));
  app.use(json());

  app.get('/', (req: Request, res: Response) => res.json('funcionando'));

  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch(err => {
      console.error('Error during Data Source initialization', err);
    });

  app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
  });
}
Server();

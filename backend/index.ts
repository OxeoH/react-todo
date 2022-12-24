import dotenv from 'dotenv'
dotenv.config()

import express, { Request, Response } from "express";
import cors from "cors"
import AppDataSource from './data-source';

const app = express()


app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000;
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

const startTodoServer = async () => {
  try{
    await AppDataSource.initialize()
    app.listen(port, () => console.log("SERVER START ON PORT: ", port));
  }catch(e){
    console.log(e);
  }
}

startTodoServer()


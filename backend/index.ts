import dotenv from 'dotenv'
dotenv.config()

import express, { Request, Response } from "express";
import cors from "cors"
import AppDataSource from './data-source';
import userRouter from './src/User/user.router';
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.json())
app.use("/user", userRouter)

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000;

const startTodoServer = async () => {
  try{
    await AppDataSource.initialize()
    app.listen(port, () => console.log("SERVER START ON PORT: ", port));
  }catch(e){
    console.log(e);
  }
}

startTodoServer()


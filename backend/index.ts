import dotenv from 'dotenv'
dotenv.config()

import express, { Request, Response } from "express";

import AppDataSource from './data-source';
import userRouter from './src/User/user.router';
import bodyParser from 'body-parser';
import cors from 'cors';
import groupsRouter from './src/Groups/groups.router';
import todosRouter from './src/Todo/todo.router';

const app = express()
app.use(cors())




app.use(express.json())

app.use(bodyParser.json())

app.use("/api/user", userRouter)
app.use("/api/groups", groupsRouter)
app.use("/api/todos", todosRouter)

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


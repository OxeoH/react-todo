import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import cors from "cors"

const app = express()


app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000;
app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(port, () => console.log("SERVER START ON PORT: ", port));
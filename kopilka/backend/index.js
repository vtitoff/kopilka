import express from 'express'
import mongoose from "mongoose";

const PORT = 5000;
const DB_TOKEN = process.env.mongo_db_kopilka
const DB_URL = `mongodb+srv://vtitoff:${DB_TOKEN}@cluster0.k8qe9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app = express()

app.use(express.json())

app.post('/', (req, res)=>{
    console.log(req.body)
    res.status(200).json('Сервер работает!')
})

app.listen(PORT, ()=>console.log('SERVER STARTED'))
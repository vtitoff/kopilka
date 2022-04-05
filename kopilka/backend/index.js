import express from 'express';
import mongoose from 'mongoose';
import itemRouter from './ItemRoute.js';
import metricRouter from "./MetricRoute.js";

const PORT = 5000;
const DB_TOKEN = process.env.mongo_db_kopilka
const DB_URL = `mongodb+srv://vtitoff:${DB_TOKEN}@cluster0.k8qe9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app = express()

app.use(express.json())
app.use('/items', itemRouter)
app.use('/metric', metricRouter)
// app.use('/user', userRouter)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED'))
    } catch (e) {
        console.log(e)
    }
}

startApp()
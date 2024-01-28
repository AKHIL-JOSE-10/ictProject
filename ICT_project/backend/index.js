import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {UserRouter} from './routes/UserRouter.js'
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/crud')
        .then(() => console.log('connected to database'))
        .catch( ()=>console.log("not connected"))

app.use('/',UserRouter)






app.listen(3001,()=>{console.log("connected to port")})
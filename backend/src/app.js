import express from 'express'
import connectedDB from './db/connectedDB.js'
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

connectedDB()

app.use('/api', userRouter)



export default app
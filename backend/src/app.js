import express from 'express'
import connectedDB from './db/connectedDB.js'
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: "https://dashboard-with-backend.vercel.app/", // your frontend URL
    credentials: true
}))

connectedDB()


app.use('/api', userRouter)
app.get('/',(req,res)=>{
    res.send("Helo")
})



export default app
import express from 'express'
import connectedDB from './db/connectedDB.js'
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import productRouter from './routes/product.routes.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173","https://dashboard-with-backend.vercel.app"], // your frontend URL
    credentials: true
}))

connectedDB()


app.use('/api', userRouter)
app.use('/api',productRouter)
app.get('/',(req,res)=>{
    res.send("Helo")
})



export default app
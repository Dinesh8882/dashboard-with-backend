import express from 'express'
import { getUsersDetailsByAdmin , login, register } from '../controllers/user.controllers.js'
import authMiddelware from '../middelwares/auth.middelware.js'

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/user-details', authMiddelware, getUsersDetailsByAdmin )

export default userRouter
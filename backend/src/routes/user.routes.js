import express from 'express'
import { getUsersDetailsByAdmin, login, logout, register, userDetails } from '../controllers/user.controllers.js'
import authMiddelware from '../middelwares/auth.middelware.js'

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/user-details', authMiddelware, getUsersDetailsByAdmin)
userRouter.get('/profile', authMiddelware, userDetails)
userRouter.get('/logout', authMiddelware, logout)

export default userRouter
import express from 'express'
import { deleteUser, deleteUserByAmind, getUsersDetailsByAdmin, login, logout, register, update, userDetails } from '../controllers/user.controllers.js'
import authMiddelware from '../middelwares/auth.middelware.js'

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/user-details', authMiddelware, getUsersDetailsByAdmin)
userRouter.get('/profile', authMiddelware, userDetails)
userRouter.get('/logout', authMiddelware, logout)
userRouter.put('/profile-update', authMiddelware, update)
userRouter.delete('/delete-profile', authMiddelware, deleteUser)
userRouter.delete('/delete-by-admin/:id', authMiddelware, deleteUserByAmind)

export default userRouter
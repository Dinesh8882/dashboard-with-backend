import userModel from '../models/user.models.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const register = async (req, res) => {
    try {
        const { name, password, email, role } = req.body

        if (!name && !password && !email && !role) {
            return res.status(400).json({
                success: false,
                message: "All feilds are required!"
            })
        }

        const isUserExists = await userModel.findOne({ email })
        if (isUserExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists!"
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            name,
            email,
            password: hashPassword,
            role
        })
        const token = jwt.sign({ id: user._id, admin: user.admin }, process.env.JWT_SECRET)

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            // sameSite: "strict",
            // maxAge: 30 * 60 * 1000
        })

        res.status(200).json({
            success: true,
            message: "User created successfully!",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email && !password) {
            return res.status(400).json({
                success: false,
                message: "both feilds are required!"
            })
        }

        const userFound = await userModel.findOne({ email }).select("+password")

        if (!userFound) {
            return res.status(400).json({
                success: false,
                message: "email or password is wrong!"
            })
        }

        console.log(userFound);


        const passwordChecked = await bcrypt.compare(password, userFound.password)

        if (!passwordChecked) {
            return res.status(400).json({
                success: false,
                message: "email or password is wrong!"
            })
        }

        const token = jwt.sign({ id: userFound._id, role: userFound.role }, process.env.JWT_SECRET)

        res.cookie("token", token)

        const userWithoutPassword = userFound.toObject()
        delete userWithoutPassword.password
        res.status(200).json({
            success: true,
            message: "logged in successfully!",
            userWithoutPassword
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getUsersDetailsByAdmin  = async (req, res) => {
    try {
        const users = await userModel.find({
            role: { $ne: "admin" }
        })
        res.status(200).json({
            success:true,
            message:"Data fatched successfully!",
            users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



export {
    register,
    login,
    getUsersDetailsByAdmin 
}
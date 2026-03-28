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
            secure: true,        // required in production (https)
            sameSite: "None"     // VERY IMPORTANT
        })
        const userWithoutPassword = user.toObject()
        delete userWithoutPassword.password
        res.status(200).json({
            success: true,
            message: "User created successfully!",
            userWithoutPassword
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

        const passwordChecked = await bcrypt.compare(password, userFound.password)

        if (!passwordChecked) {
            return res.status(400).json({
                success: false,
                message: "email or password is wrong!"
            })
        }

        const token = jwt.sign({ id: userFound._id, role: userFound.role }, process.env.JWT_SECRET)

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        })

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

const getUsersDetailsByAdmin = async (req, res) => {
    try {
        const users = await userModel.find({
            role: { $ne: "admin" }
        })
        res.status(200).json({
            success: true,
            message: "Data fatched successfully!",
            users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const userDetails = async (req, res) => {
    try {
        const { id } = req.userDetails

        const user = await userModel.findById(id)

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized!0"
            })
        }

        res.status(200).json({
            success: true,
            message: "Fatched successfully!",
            user
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const logout = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        })
        res.status(200).json({
            succuss: true,
            message: "User logged out successfully!"
        })
        console.log(req);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.userDetails
        const { name, email } = req.body
        const user = await userModel.findByIdAndUpdate(id,
            {
                name,
                email
            },
            { returnDocument: "after" }
        )

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user!"
            })
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully!",
            user
        })


        console.log(user);

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.userDetails
        await userModel.findByIdAndDelete(id)

        res.clearCookie('token')
        res.status(200).json({
            success: true,
            message: "User deleted successfully!"
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deleteUserByAmind = async (req, res) => {
    try {
        // console.log(req.params.id);

        const { id } = req.params
        await userModel.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: "Deleted user successfully!"
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
    getUsersDetailsByAdmin,
    userDetails,
    logout,
    update,
    deleteUser,
    deleteUserByAmind
}
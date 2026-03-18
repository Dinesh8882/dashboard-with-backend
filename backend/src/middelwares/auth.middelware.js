// import bcrypt from 'bcrypt'
import jwt, { decode } from 'jsonwebtoken'

const authMiddelware = (req, res, next) => {
    try {
        const { token } = req?.cookies
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user!"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        req.userDetails = decoded
        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export default authMiddelware
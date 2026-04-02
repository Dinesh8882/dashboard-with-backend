import userModel from "../models/user.models.js";
const roleBaseAuth = (roles) => {

    return async function (req, res, next) {
        const { id } = req.userDetails

        const user = await userModel.findById(id)

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            });
        }

        if (!roles?.includes(user?.role)) {
            return res.status(401).json({
                success: false,
                message: "user is not authorized!!!"
            })
        }
        next()
    }
}

export default roleBaseAuth
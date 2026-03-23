import baseAPI from '../api/api'

const registerUser = (data) => {
    return baseAPI.post("/register", data)
}

const fatchedUserData = () => {
    return baseAPI.get("/profile")
}

const logout = () => {
    return baseAPI.get("/logout")
}

const login = (data) => {
    return baseAPI.post("/login", data)
}

const getAllUsers = () => {
    return baseAPI.get("/user-details")
}

const updateProfile = (data) => {
    return baseAPI.put("/profile-update",data)
}

const deleteUser = ()=>{
    return baseAPI.delete("/delete-profile")
}

export {
    registerUser,
    fatchedUserData,
    logout,
    login,
    getAllUsers,
    updateProfile,
    deleteUser
}
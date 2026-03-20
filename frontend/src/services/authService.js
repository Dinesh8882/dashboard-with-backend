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

const login = (data)=>{
    return baseAPI.post("/login",data)
}

export {
    registerUser,
    fatchedUserData,
    logout,
    login
}
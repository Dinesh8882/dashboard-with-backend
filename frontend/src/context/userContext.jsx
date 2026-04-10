import React, { createContext, useEffect, useState } from "react";
import { fatchedUserData, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

const ContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)
    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const fatchedData = async () => {
            try {
                if (userData) return null;
                const res = await fatchedUserData()
                if (res.data.success) {
                    setUserData(res.data.user)
                }

            } catch (err) {
                if (err.response?.status === 401) {
                    setUserData(null);
                } else {
                }
            } finally {
                setLoading(false)
            }

        }

        fatchedData()
    }, [])

    const userLogout = async () => {
        await logout()
        setUserData(null)
        navigate('/')
    }

    const values = {
        setUserData,
        userData,
        loading,
        setLoading,
        userLogout,

        productData,
        setProductData
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider
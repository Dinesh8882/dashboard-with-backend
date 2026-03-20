import React, { createContext, useEffect, useState } from "react";
import { fatchedUserData } from "../services/authService";

export const UserContext = createContext()

const ContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fatchedData = async () => {
            try {
                const res = await fatchedUserData()
                if (res.data.success) {
                    setUserData(res.data.user)
                }

            } catch (err) {
                if (err.response?.status === 401) {
                    setUserData(null);
                    // console.log(err);
                } else {
                }
            } finally {
                setLoading(false)
            }

        }

        fatchedData()
    }, [])
    
    const values = {
        setUserData,
        userData,
        loading,
        setLoading
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider
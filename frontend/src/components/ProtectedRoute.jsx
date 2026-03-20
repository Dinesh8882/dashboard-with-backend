import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children, allowedRoles }) {

    const { userData } = useContext(UserContext)
    if (!userData) return < Navigate to="/login" />

    if (allowedRoles && !allowedRoles.includes(userData.role)) {
        return <Navigate to='/' />
    }

    return children
}

export default ProtectedRoute

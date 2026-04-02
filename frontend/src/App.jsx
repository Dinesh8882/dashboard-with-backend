import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import ProductPage from './pages/Product'
import { fatchedUserData } from './services/authService'
import { UserContext } from './context/userContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Profile from './pages/Profile'
import UpdateProfile from './pages/UpdateProfile'
import AdminLayout from './pages/admin/AdminLayout'

function App() {
  const { userData, loading } = useContext(UserContext)

  if (loading) return null
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={userData ? <Navigate to='/' /> : <Register />} />
      <Route path='/admin' element={
        <ProtectedRoute allowedRoles={['admin']}>
          <AdminLayout />
        </ProtectedRoute>
      } />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/login' element={
        userData ? <Navigate to='/' /> : <Login />
      }
      />
      <Route path='/profile' element={userData ? <Profile /> : <Navigate to='/' />} />
      <Route path='/update-profile' element={<UpdateProfile />} />
      <Route path='*' element={<PageNotFound />} />



    </Routes>
  )
}

export default App

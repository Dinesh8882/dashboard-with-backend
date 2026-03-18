import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import ProductPage from './pages/Product'
import AdminLayout from './pages/Admin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/admin' element={<AdminLayout />} />
      <Route path='/product' element={<ProductPage />} />
    </Routes>
  )
}

export default App

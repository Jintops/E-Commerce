import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Register from './pages/auth/Register'
import Login from './pages/auth/Login' 
import Layouts from './components/auth/Layouts'
import Layout from './components/admin-view/Layout'
import Dashboard from './pages/admin-view/Dashboard'
import Features from './pages/admin-view/Features'
import Products from './pages/admin-view/Products'
import Orders from './pages/admin-view/Orders'

const App = () => {
  return (
    <div>
      <h1>Hello, welcome!</h1>
      <Routes>
        <Route path='/auth' element={<Layouts/>}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      
          <Route path='/admin' element={<Layout/>}>
          <Route path='dashboard' element={<Dashboard/>}></Route>
          <Route path='features' element={<Features/>}></Route>
          <Route path='products' element={<Products/>}></Route>
          <Route path='orders' element={<Orders/>}></Route>
          </Route>
        
      </Routes>
    </div>
  )
}

export default App

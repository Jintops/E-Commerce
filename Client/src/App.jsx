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
import ShoppingLayout from './components/shopping-view/ShoppingLayout'
import NotFound from './pages/not-found/NotFound'
import Account from './pages/shopping-view/Account'
import Checkout from './pages/shopping-view/Checkout'
import Home from './pages/shopping-view/Home'
import Listing from './pages/shopping-view/Listing'

const App = () => {
  return (
    <div>
     
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
          
          <Route path='/shop' element={<ShoppingLayout/>}> 
          <Route path='account' element={<Account/>}></Route>
          <Route path='checkout' element={<Checkout/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='listing' element={<Listing/>}></Route>
          </Route>

          <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App

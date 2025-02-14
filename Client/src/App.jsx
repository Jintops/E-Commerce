import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Register from './pages/auth/Register'
import Login from './pages/auth/Login' 
import Layouts from './components/auth/Layouts'


const App = () => {
  return (
    <div>
      <h1>Hello, welcome!</h1>
      <Routes>
        <Route path='/auth' element={<Layouts/>}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

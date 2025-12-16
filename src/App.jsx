import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home2 from './pages/Home2'

const App = () => {
  return (
    <>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/home2' element={<Home2 />} />
</Routes>

    </>
  )
}

export default App
import React from 'react'
import './Navbar.css'
import Login from '../pages/Login'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
    <nav>
<div className='heading'>
    <h2>Organize your tasks to do.</h2>
</div>
<div className='btn'>
<button className='nav-btn' onClick={() => navigate('/login')}>Login</button>
</div>
    </nav>
    </div>
  )
}

export default Navbar
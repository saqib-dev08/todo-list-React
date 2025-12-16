import React from 'react'
import { Link, Links, Navigate } from 'react-router-dom'
import Login from './Login'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    const navigate = useNavigate(); 
    const [inpName, setInpName] = useState("");
console.log(inpName);

const [inpDob, setInpDob] = useState("");
const [inpEmail, setInpEmail] = useState("");
const [inpPass, setInpPass] = useState("");

const user = 
{
    Name: inpName,
    DOB: inpDob,
    Email: inpEmail,
    Password: Number(inpPass)
};

console.log(user, "users");



  return (
    <div className='signup-page'>
        <div className="signup-card">
            <div className="header">
                <h2>SIGNUP</h2>
            </div>
            <div className="form">
                <form onSubmit={(event) => {
                            event.preventDefault();
                             const users = JSON.parse(localStorage.getItem('User')) || [];
                             const emailMatch = users.filter((user) => inpEmail === user.Email);
console.log(emailMatch, "mathch");
                             if(emailMatch.length > 0){
                                alert("Email already exists!")
                                return;
                             }
    console.log(users, "storage");
    users.push(user);
    console.log(users, "storage2");
const userStorage = localStorage.setItem('User', JSON.stringify(users));
alert("You've successfully Signed In!");    
navigate('/login');
}}>
                    <div className="signup-inputs">
                       <input type="text" className='signup-input' placeholder='Enter your Name' onChange={(e) => setInpName(e.target.value)} required/>
                       <input type="date" className='signup-input' placeholder='Enter your Date of Birth' onChange={(e) => setInpDob(e.target.value)} required/>
                        <input type="email" className='signup-input' placeholder='Enter your email' onChange={(e) => setInpEmail(e.target.value)} required/>
                        <input type="password" className='signup-input' placeholder='Create password' onChange={(e) => setInpPass(e.target.value)} required/>
                    </div>  
                    <div className="signup-para">
                        <input className='signup-btn' type="submit" value="SignUp" />
                        <p style={{color:'gray'}}>Already have an account? <Link to="/login" element={<Login />} style={{color:' rgb(68,147,248)'}}>Login</Link></p>
                    </div>
                   
                </form>
            </div>
        </div>

    </div>
  )
}

export default Signup
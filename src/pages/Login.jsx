import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'
import '../pages/Login.css'

const Login = () => {
    const navigate = useNavigate();
const [userEmail, setUserEmail] = useState("");
console.log(userEmail);

const [userPass, setUserPass] = useState("");
console.log(userPass);

const loginUser = {
    Email: userEmail,
    Password: Number(userPass)
};
console.log(loginUser, 'lginUser1');

const loggedUser = [];
loggedUser.push(loginUser);

console.log(loggedUser, 'lginUser2');

    const storedUsers = JSON.parse(localStorage.getItem('User'));
    console.log(storedUsers, "storeduser");


  return (
  <div className="login-page">
    <div className='login-card'>
        <h2>WELCOME!</h2>
        <form onSubmit={function(event){
            event.preventDefault();
    let matchEmail = storedUsers.filter((users) => users.Email === loginUser.Email);
  console.log(matchEmail, "matchenmail");
  console.log(matchEmail.Password, "matchenpass");

   if(matchEmail.length === 0){
            alert("Invalid Email!");
    }else{

        let userMatch = matchEmail.map((value) => {
            
           if(value.Password !== loginUser.Password){
                    alert("Invalid Password!");
                    }else{
                        navigate('/');
                        localStorage.setItem("LoggedUser", JSON.stringify(matchEmail));
                        alert("Welcome, " + value.Name + "!");
                    }
        } )
    };
  
    console.log(matchEmail.length, "match email");
    console.log(matchEmail.Password, "match pass");
    }}>
        <div className='login-inputs'>
       <input type="email" className='email-inp' placeholder='Enter your email' onChange={(e) =>{setUserEmail(e.target.value)}} required/>
<input type="password" className='pass-inp' placeholder='Enter your password' onChange={(e) =>{setUserPass(e.target.value)}} required/>
</div>
<div className="signup-para">
<input className='login-btn' type="submit" value="LOGIN" />
<p className="signup-acc" style={{color:'gray'}}>Don't have an account? <Link to='/signup'><span style={{color:'rgb(68,147,248)'}} element={<Login />} >SignUp</span></Link></p>
</div>
</form>
    </div>
  </div>
  )
}

export default Login
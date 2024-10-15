import React, { useEffect, useState } from 'react'
import './LoginSignup.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person.png'

const LoginSignup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Basic validation
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
    
        // You can submit the formData to the backend here, e.g., through an API call
        console.log(formData);
      };
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div> 

        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt=""/>
                <input type="text" placeholder='Username'/>
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="text" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="text" placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>

        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
 
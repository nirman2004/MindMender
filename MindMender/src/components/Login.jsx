import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Login.css"
import { useState } from 'react'
import img from "../assets/peace.png"


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };
  return (
    <div className='main'>
    <div className='Login'>
     
       <div className='container'> 
       <p className='head'>Login</p><form action="">
          <div className='email'>
            <input type="email" />
            <label htmlFor=''>Your Email</label>
          </div>
          <div className='password'>
            <input type={showPassword ?'text' : 'password'} />
            <label htmlFor=''>Your Password</label>
          </div>
          <div>
            <input type="checkbox" name="" id="showPasswordCheckbox" 
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="">Show Password</label>
          </div>
          <button className='btn-login' type='submit'>Login</button>

          <span>Forgot Password?</span>
          
          <div>
            <span>New Here? <Link className="register" to='/Register'>Create an account</Link></span>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login

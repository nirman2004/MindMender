import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
   
    <header className="header">
    <Link to="/Front" className="logo">MindMender</Link>
    <nav className="navbar">
      <Link to="/" className='link'>Home</Link>
      <Link to="/Service" className='link'>Services</Link>
      <Link to="/Contact" className='link'>About</Link>
    </nav>
    <Link to="/Login" className='log-in'>Login</Link>
  </header>
   
  )
}

export default Navbar

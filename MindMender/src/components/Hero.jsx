import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/Service')
  }
  return (
    <div className='asset'>
   <div className='home'>
    <div className='dashbox'>
    <div className='dashbox_left'>
        <p className='big'>Minds Matter, Every Day!</p>
        <p className='small'>"Yeh engineers bade chalak hote hain sir. Aisi koi machine hi nahi banai jo brain ka pressure naap sake. Agar banayi hoti toh pata chal jata ki ye suicide nahi murder hai."</p>
        
       <button onClick={handleClick} className='btn-1'>Our Services</button>
    </div>

    </div>
   </div>
   </div>
  )
}

export default Hero

import React from 'react'
import Navbar from './Navbar'
import './Service.css'
import img1 from "../assets/img1.avif"
import img2 from "../assets/img2.avif"
import img3 from "../assets/img3.avif"
import { Link } from 'react-router-dom'
const Service = () => {
  
  return (

     <div>
      <Navbar />
      <main>
        <div className="title">
          Our Services
        </div>
        <div className="row">
          <div className="box">
            <img src={img2} alt="" />
            <h3>CBT</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorum ea cupiditate dicta, omnis ut nam ducimus alias. Suscipit provident consequuntur dicta, et ar</p>
            <button className='btn1'>See More</button>
          </div>
          <div className="box">
            <img src={img1} alt="" />
            <h3>Depression Tests</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorum ea cupiditate dicta, omnis ut nam ducimus alias. Suscipit provident consequuntur dicta, et ar</p>
            <button className='btn1'><Link to="/DepressionTest">See More</Link></button>
          </div><div className="box">
            <img src={img3} alt="" />
            <h3>Chat Bot</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorum ea cupiditate dicta, omnis ut nam ducimus alias. Suscipit provident consequuntur dicta, et ar</p>
            <button className='btn1'>See More</button>
          </div>
        </div>
        <div className="service-box">

        </div>
      </main>
    </div>

   
  )
}

export default Service

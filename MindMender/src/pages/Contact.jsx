import Navbar from "../components/Navbar";
import React from 'react'
import "./Contact.css"
import image from '../assets/myslf.jpg'
import { FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa"; 
import { SiCodechef } from "react-icons/si";
 const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:nirmandey2004@gmail.com?subject=Hello&body=I wanted to get in touch with you.';
  };
   return (
    
     <div>
       <Navbar/>
       <main className="ser">
      
      <div className="main-box"><div className="img-box"><img src={image}alt="" />
      <br/>
    <p className="my-self">Hello, I'm Nirman </p>
    <p className="desc">I am a dedicated front-end web developer with a passion for creating visually appealing and highly functional user interfaces. My expertise in HTML, CSS, and JavaScript, coupled with frameworks like React.js, allows me to build responsive and user-friendly websites and applications.</p>
    <div className="links">
      <a href="https://www.linkedin.com/in/nirman-dey-554140238/"><FaLinkedin/></a>
      <a href="https://github.com/nirman2004"><FaGithub/></a>
      <a href="https://www.codechef.com/users/nirman2004"><SiCodechef/></a>
      <a href="https://www.instagram.com/nirmandey/"><FaInstagram/></a>
    </div>
      </div>
      <div className="txt-box"><p className="about">My Mission</p>
      <p className="desc2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus earum quia doloremque. Assumenda officia est maxime minus debitis facere sint voluptates eaque consectetur, quae nemo vel nesciunt maiores iure obcaecati.</p>
      <br />
      <p className="desc3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores, perspiciatis, sequi dicta ad, eius dignissimos exercitationem perferendis veritatis maiores debitis officia aut voluptas cumque minus iure itaque ex blanditiis!</p>
      <button onClick={handleEmailClick} className="btn-2">
        Contact Me
      </button></div>
      </div>

       </main>
     </div>
   )
 }
 
 export default Contact
 
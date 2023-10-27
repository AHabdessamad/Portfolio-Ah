import React from 'react';
import './container.css';
import {FaGithub,FaLinkedinIn,FaXTwitter, FaEnvelope} from 'react-icons/fa6';


export default function Container(){
  return(
    <div className='container-g'>
      
          <h1>ABDESSAMAD AIT HAMOU</h1> 
          <h3>Full Stack Developer and DJ enthusiast</h3>
          <nav className='main-nav'>
            <li><a  href="https://twitter.com/Ait7Abdessamad" rel="noreferrer" target="_blank"><FaXTwitter/></a></li>
            <li><a  href="https://github.com/AHabdessamad" rel="noreferrer" target="_blank"><FaGithub/></a></li>
            <li><a  href="https://www.linkedin.com/in/abdessamad-aithamou-3b36a9211/" rel="noreferrer" target="_blank"><FaLinkedinIn/></a></li>
            <li><a  href="mailto:abdessamadaithamou0@gmail.com?" rel="noreferrer" target="_blank"><FaEnvelope/></a></li>
          </nav>
        
        
     
     
       
    </div>
  )
}
import './projects.css'
import { useEffect, useState } from 'react';
import profile from '../../../assets/imgs/me_v1.jpg';
import axios from 'axios';


export default function Projects(){
    const [project, setproject] = useState([]);

    useEffect(() =>{
       handleProjects()
    },[])

    const handleProjects = () =>{
       axios.get('http://localhost:3004/projects').then((resp) =>{
         setproject(resp.body);
       }).catch((err) => console.error(err))
    }
   

  return (

   <div className='project-container'>
    <p>{project}</p>
    <h1>Projects Section</h1>
    <div className='projects-container'>
    <section className='project'>
      <div className='project-img'>
        <img src={profile} alt="project-img"></img>
      </div>
      <div className='project-details'>
        <h2>Real Estate Agency</h2>
        <p> Lorem ipsum dolor sit amet, hkhh jpojj ojpojp ouhijih hoihioconsectetur adip</p>
        <div className='line'></div>
        <p><span>#Html</span><span>#Css</span><span>#Js</span></p>
        <div className='links'>
           <button className='browse-btn'><a href="#">Visit</a></button>
           <button className='github-btn'><a>Github</a></button>
        </div>
      </div>
    </section>
    <section className='project'>
      <div className='project-img'>
        <img src={profile} alt="project-img"></img>
      </div>
      <div className='project-details'>
        <h2>Real Estate Agency</h2>
        <p> Lorem ipsum dolor sit amet, hkhh jpojj ojpojp ouhijih hoihioconsectetur adip</p>
        <div className='line'></div>
        <p><span>#Html</span><span>#Css</span><span>#Js</span></p>
        <div className='links'>
           <button className='browse-btn'><a href="#">Visit</a></button>
           <button className='github-btn'><a>Github</a></button>
        </div>
      </div>
    </section>


    </div>
    </div>
  )
}



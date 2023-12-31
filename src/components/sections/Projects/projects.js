import './projects.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
// import project1 from '../../../assets/imgs/portfolio.png';
export default function Projects(){
    const [projects, setProjects] = useState([]);

    // useEffect(() =>{
    //    handleProjects()
    //    console.log('loaded', projects);
    // },[])
    // const handleProjects = () =>{
    //    axios.get('http://localhost:3009/projects').then((resp) =>{
    //     const req = resp.body;
    //     setprojects(req);
    //    }).catch((err) => console.error(err))
    // }]
    useEffect(() => {
      // Use an arrow function for handleProjects to avoid issues with 'this'
      const handleProjects = () => {
          try {
              setProjects([
                    {
                      "id": 1,
                     "title": "Real Estate Agency",
                      "image": "imgs/real-estate-agency.png",
                      "description": "Platform of selling and renting real estates",
                      "tools": ["html-Css-JS","php","MySQL"],
                       "OnlineLink": "http://reactjs.org",
                       "github" : "https://github.com/AHabdessamad/Laforain_Immobilier"
                    },
                    {
                      "id": 2,
                      "title": "My Portfolio",
                       "image": "/imgs/portfolio.png",
                       "description": "My Personal Portfolio",
                       "tools" : ["React", "CSS", "Json-server"],
                        "OnlineLink": "http://reactjs.org",
                        "github" : "https://github.com/AHabdessamad/Portfolio-Ah"
                     },
                     {
                      "id": 3,
                      "title": "Notat",
                       "image": "/imgs/Notat.png",
                       "description": "Write your Notes to do efficiently work",
                       "tools" : ["NodeJs", "MongoDb", "Google-Auth"],
                        "OnlineLink": "http://reactjs.org",
                        "github" : "reactjs"
                     },  {
                      "id": 4,
                      "title": "RESTful api",
                       "image": "/imgs/RESTapi.png",
                       "description": "Creating a CRUD operations and advanced filtering of Data",
                       "tools" : ["NodeJs", "Express", "MongoDB"],
                        "OnlineLink": "http://reactjs.org",
                        "github" : "reactjs"
                     }
            ]
);
              
          } catch (err) {
              console.error(err);
          }
      };

      handleProjects(); 
  }, []);
   

  return (

   <div className='project-container'>
    <h1>Projects Section</h1>
    <div className='projects-container'>
      {projects.map((project) =>( 
           
            <section className='project' key={project.id}>
              <div className='project-img'>
                <img src={project.image}  alt="project-img"/>
              </div>
              <div className='project-details'>
                <h2>{project.title}</h2>
                <p> {project.description}</p>
                <div className='line'></div>
                <p><span>#{project.tools[0]}</span><span>#{project.tools[1]}</span><span>#{project.tools[2]}</span></p>
                <div className='links'>
                  <button className='browse-btn'><a href={project.OnlinLink} target="_blank">Visit</a></button>
                  <button className='github-btn'><a href={project.github} target="_blank">Github</a></button>
                </div>
              </div>
            </section>
        )
      )
      }
    {/* <section className='project'>
      <div className='project-img'>
        <img src={project_img } alt="project-img"></img>
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
    </section> */}


      </div>
    </div>
  )
}



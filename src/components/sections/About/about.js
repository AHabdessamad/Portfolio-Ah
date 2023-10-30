import './about.css'
import profile from '../../../assets/imgs/me_v1.jpg'
const about = () => {
  return (
    
    <div className="about-container">
      <div className="circle">
         <img src={profile} alt="profile-img"></img> 
      </div>
      <h1>Abdessamad AIT HAMOU</h1>
      <div className='about-section'>
      <h2>👨‍💻 About</h2>
      <p>Hello ! 👋, I'm Abdessamad Ait Hamou,a full stack developer from Morocco enthusiast with IT thecologies . I love creating web applications that are fast, functional, and user-friendly. </p>
      <p>I have experience in developing both front-end and back-end using MERN Stack and Docker. I also have a keen eye for design and usability, and I always strive to improve the user experience of my projects.</p>
      <p>If you want to know more about me or my work, feel free to contact me on one of my social media profiles or follow me on GitHub or LinkedIn . Thank you for visiting my about page!</p>
      <h2>😍 Interests</h2>
      <p>In my free time i like participating in charity events with clubs in my school to get in touch with people. ^_^ </p>
      <p>I also Workout at GYM and Listening to some podcast or Youtube Video related to tech,Software developement. </p>
      
      <h2>📃 Certifications</h2>
      <p> Html, Css and JavaScript for web developers from John Hopkings University 👉<a href='https://www.coursera.org/account/accomplishments/certificate/VFMPE42XLEM9' target='_blank'>SEE</a></p>
      <p>Version Controle From Meta 👉<a href='https://www.coursera.org/account/accomplishments/certificate/XP7XNNCR2FGL' target='_blank'> SEE</a></p>

      <h2>🚀 Looking For</h2>
      <p>I'm currently exploring new technologies such as Java Spring and Docker, while continually upgrading my skills in the MERN stack.</p>
      <p>Stay tuned for some exciting projects in the works!</p>
      </div>

    </div>
  )
}

export default about

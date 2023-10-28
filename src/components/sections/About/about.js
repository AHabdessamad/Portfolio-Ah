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
      <p>Hi👋, I'm Abdessamad Ait Hamou,a full stack developer from Morocco enthusiast with IT thecologies . I love creating web applications that are fast, functional, and user-friendly. </p>
      <p>I have experience in developing both front-end and back-end using MERN Stack and Docker. I also have a keen eye for design and usability, and I always strive to improve the user experience of my projects.</p>
      <p>If you want to know more about me or my work, feel free to contact me  at  abdessamadaithamou or follow me on GitHub or LinkedIn . Thank you for visiting my about page!</p>
      <h2>😍Interest</h2>
      <p></p>
      <h2>📃Certifications</h2>
      </div>

    </div>
  )
}

export default about

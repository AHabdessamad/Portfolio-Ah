import { Link } from 'react-router-dom'
import './skills.css'

export default function Skills(){
  return(
    <div className="skills-container">
      <span className='title'><Link to={'/'}>home &gt;</Link>skills</span>
      <p>“I love programming. It helps me to challenge my limits and learn new technologies and skills in coding every day, which increase my knowledge as a software engineer.“</p>
      <p>These are Technologies that I enjoy working with :</p>
      <section className='frontend'>
        <h1>Frontend Technologies </h1>
         <div className='icon-container'>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html-icon"/></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css-icon"/></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS-icon"/></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-icon" /></div>
         </div>
      </section>
      <section className='Backend'>
        <h1>Backend Technologies</h1>
          <div className='icon-container'>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="CS-icon" /></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="java-icon" /></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="dotnet-icon" /></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodeJS-icon" /></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="epress-icon" /></div>
           </div>
      </section>
      <section className='Backend'>
        <h1>DataBases</h1>
          <div className='icon-container'>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="Mysql=icon" /></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongoDB-icon" /></div>
           </div>
      </section>
      <section className='Backend'>
        <h1>Editor & Tools</h1>
          <div className='icon-container'>
               <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VScode-icon"/></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="git-icon" /></div>
              <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github-icon" /></div>
           </div>
      </section>


    
    </div>
  )
}
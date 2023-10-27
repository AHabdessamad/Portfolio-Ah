
import './header.css'; 
import {useState , useEffect} from 'react';
import {FaCircleHalfStroke, FaList} from 'react-icons/fa6';
import { Link } from 'react-router-dom';



const Header = (props) => {
  const [listVisible, setListVisible] = useState(false);
  const [CurrentRoute , SetCurrentRout] = useState();
  const changeTheme = () =>{
     props.onChangeTheme();
  }
  useEffect(()=>{
   
    document.onchange = setListVisible(false);

  },[])
  return (
    
    <div className="header-container"  >
      <div className='header'>
          <h3 className="title"><Link to={"/"} onClick={()=> SetCurrentRout('/')}  >&gt; $ ah /Home/</Link><span className='logo__cursor' style={{'backgroundColor':'#eb6123'}}></span></h3>
          <nav className='items'>
            <ul className={listVisible ? 'open' : 'close'}>
                {/* <li><Link></Link></li> */}
                <li><Link to={"/about"} onClick={()=> SetCurrentRout('/about')} className={CurrentRoute === '/about'? "WithOpacity" : "NonOpacity"}>About</Link></li>
                <li><Link to={"/skills"} onClick={()=> SetCurrentRout('/skills')} className={CurrentRoute === '/skills'? "WithOpacity" : "non"}>Skills</Link></li>
                <li><Link to={"/projects"} onClick={()=> SetCurrentRout('/projects')} className={CurrentRoute === '/projects'? "WithOpacity" : "non"}>Projects</Link></li>
                <li><Link to={"/posts"} onClick={()=> SetCurrentRout('/posts')} className={CurrentRoute === '/posts'? "WithOpacity" : "non"}>Posts</Link></li>
            </ul>
            <span className='mode-icon' onClick={changeTheme}><FaCircleHalfStroke/></span>
            <span className='Listed hidden' onClick={() =>{
              setListVisible(!listVisible)
            }}><FaList/></span>
            </nav>
        </div>
    </div>
  )
}
export default Header
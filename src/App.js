import { Footer, Header, Container, About, Skills, Projects, Posts } from "./components/imports";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  const [theme , setTheme] = useState("theme"? 'Light' : 'Dark');
  const changeTheme = () => {
      setTheme(theme === 'Light'? 'Dark' : 'Light');
  }


  return (
    <div className="container" data-Theme={theme}>
      <BrowserRouter>
       <Header onChangeTheme={changeTheme} />
          <Routes>
            <Route path="/"  element={<Container/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Skills" element={<Skills/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/posts" element={<Posts/>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer/>
   
   </div>
  );
}

export default App;


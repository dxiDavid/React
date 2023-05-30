import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Projects from './Components/Projects.jsx'
import About from './Components/About'

function App() {
  // const [isClicked, setIsClicked] = useState(false)

  // const toggle = () =>{
  //   setIsClicked((prev) => !prev)
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


// {/* <Nav
//       toggleBurger={isClicked ? "nav-toggle burger-active" : "nav-toggle "}
//       toggleLinks={isClicked ? "links links-active" : "links"}
//       handleClick = {() => toggle()}
// /> */}
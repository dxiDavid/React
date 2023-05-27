import { useState, useEffect } from 'react'
import Nav from './Components/Nav'

function App() {
  const [isClicked, setIsClicked] = useState(false)

  const toggle = () =>{
    setIsClicked((prev) => !prev)}

  return (
    <>
    <Nav
      toggleBurger={isClicked ? "nav-toggle burger-active" : "nav-toggle "}
      toggleLinks={isClicked ? "links links-active" : "links"}
      handleClick = {() => toggle()}
    />
    </>
  )
}

export default App

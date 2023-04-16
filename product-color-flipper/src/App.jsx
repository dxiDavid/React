import { useState } from 'react'

function App() {

const [shoe, setColor] = useState({
        name: "Air Jordan 1 Retro Low",
        size: "Normal",
        shoeColor: "Pink",
        shoeImage: "./src/assets/pink.webp"
})

  function changeToBlue(){
    setColor(prevcolor => {
      return{
        ...prevcolor,
        shoeColor: "Blue",
        shoeImage: "./src/assets/blue.webp"
      }
    })
  }
  function changeToOrange(){
    setColor(prevcolor => {
      return{
        ...prevcolor,
        shoeColor: "Orange",
        shoeImage: "./src/assets/orange.webp"
      }
    })
  }
  function changeToPink(){
    setColor(prevcolor => {
      return{
        ...prevcolor,
        shoeColor: "Pink",
        shoeImage: "./src/assets/pink.webp"
      }
    })
  }

  return (
    <div className="app-container">
      <h2>{shoe.name}</h2>
      <div className="picture">
        <img src={shoe.shoeImage}/>
      </div>
      <p>{shoe.shoeColor}</p>
      <div className="buttons">
        <button onClick={changeToBlue} className="blue-button"></button>
        <button onClick={changeToOrange} className="orange-button"></button>
        <button onClick={changeToPink} className="pink-button"></button>
      </div>
      
    </div>
  )
}

export default App

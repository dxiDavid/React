import arrowIcon from "./assets/icon-arrow-down.svg"
import { useState } from "react"
function faq(props) {
  
  const [isVisible, setIsVisible] = useState(false)

  function reveal(){
    console.log("revealed")
  }

  return (
    <>
      <div className="faq-container">
        <div className="question" onClick = {reveal}>
          <h3>{props.question}</h3> 
          <img src={arrowIcon} alt="arrow"/>
        </div>
        <div className="answer">{props.answer}</div>
      </div>
    </>
  )
}

export default faq

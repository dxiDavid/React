import arrowIcon from "./assets/icon-arrow-down.svg"
import "./index.css"

function faq(props) {

  const styles = {
    
  }

  return (
    <>  
    <div className="faq">
        <div className="question" onClick = {props.handleClick}>
          <h3>{props.question}</h3> 
          <img className="arrow-down" src={arrowIcon} alt="arrow"/>
        </div>
        <div className={props.on ? "reveal" : "answer"}>{props.answer}</div>
    </div>
    </>
  )
}

export default faq

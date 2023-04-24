import arrowIcon from "./assets/icon-arrow-down.svg"
import "./index.css"

function faq(props) {

  return(
      
        <div className="faq">
          <div className="question" onClick={props.handleClick}>
              <h3>{props.question}</h3> 
              <img className={props.selected === props.index ? "arrow arrow-down" : " arrow arrow-up"} src={arrowIcon} alt="arrow"/>
          </div>
          <div className={props.selected === props.index ? "answer reveal" : "answer"}>
              {props.answer}
          </div> 
        </div>  
      
  )
}

export default faq

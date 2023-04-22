import Faq_component from "./faq_component"
import data from "./data"
import { useState } from "react"

function App(){

    const [isVisible, setIsVisible] = useState(data)

    function toggle(id){
        console.log("add a function that tracks state and changes classes here here")
    }

    const dataElements = data.map(item => {
        return <Faq_component 
                    key = {item.id} 
                    id = {item.id} 
                    question = {item.question} 
                    answer = {item.answer} 
                    visible = {item.on} 
                    handleClick = {toggle}/>
    })

    return(
        <div className="faq-container">
            {dataElements}
        </div>
    )
}

export default App
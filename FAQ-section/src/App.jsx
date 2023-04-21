import Faq_component from "./faq_component"
import data from "./data"
import { useState } from "react"

function App(props){

    const [isVisible, setIsVisible] = useState(data)

    const dataElements = data.map(item => {
        return <Faq_component key = {item.id} question = {item.question} answer = {item.answer} on = {item.on}/>
    })

    return(
        <div>
            {dataElements}
        </div>
    )
}

export default App
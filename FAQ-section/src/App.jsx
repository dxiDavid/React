import Faq_component from "./faq_component"
import data from "./data"
import { useState } from "react"

function App(){

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
            console.log("selected")
        }
        setSelected(i)
    }

    const faq = data.map((item, index) => {
        return (
            <Faq_component 
                key = {item.id}
                id = {item.id}
                question = {item.question}
                answer = {item.answer}
                handleClick = {() => toggle(index)}
                selected = {selected}
                index = {index}
            />
        )
    })

    return(
        <div className="wrapper">
            {faq}
        </div>
    )
}

export default App
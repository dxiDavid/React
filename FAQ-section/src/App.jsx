import Faq_component from "./faq_component"
import data from "./data"

function App(){

    const dataElements = data.map(item => {
        return <Faq_component 
                    key = {item.id}
                    question = {item.question}
                    answer = {item.answer}
                />
    })

    return(
        <div>
            {dataElements}
        </div>
    )
}

export default App
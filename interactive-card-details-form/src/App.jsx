import { useState } from "react"
import Form from "./components/Form"
import Feedback from "./components/Feedback"

function App() {

  return (
    <>
      <div className="container">
        <div className="purple"></div>
        

        <div className="card-details">
          <img className="card-logo" src="./card-logo.svg" alt="card logo"></img>
          <div className="credentials">
            <p>0000 0000 0000 0000</p>
            <div className="name-and-expiry">
              <p>Jane Appleseed</p>
              <p>00/00</p>
            </div>
          </div>
        </div>
        
        <div className="form">
          <Form/>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'



function App() {
 const [count, setCount] = useState(0);
 
 function add(){
  setCount(() => {
    return count + 1;
  })
 }
 function minus(){
  setCount(() => {
    return count - 1;
  })
 }

  return (
    <div className="conunter--container">
      <button onClick={minus}> - </button>
      <div className="counter--display">{count}</div>
      <button onClick={add}> + </button>
    </div>
  )
}

export default App

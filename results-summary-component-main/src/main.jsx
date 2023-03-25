import React from 'react'
import ReactDOM from 'react-dom/client'
import Results from './Results'
import Summary from './Summary'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Results />
    <Summary />
  </React.StrictMode>,
)

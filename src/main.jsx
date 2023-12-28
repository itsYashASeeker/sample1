import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Comp from './Comp.jsx'
import Calculator from './Calculator.jsx'
import App2 from './App2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App2 />
    {/* <Calculator /> */}
  </React.StrictMode>,
)

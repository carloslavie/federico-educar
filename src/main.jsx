import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./custom-bootstrap.scss";
//import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

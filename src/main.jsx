import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter basename="/newportfolio">
=======
    <BrowserRouter  basename='/newportfolio'>
>>>>>>> c016105 ( commit)
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { PorfolioApp } from './PorfolioApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PorfolioApp />
    </BrowserRouter>
  </React.StrictMode>
)

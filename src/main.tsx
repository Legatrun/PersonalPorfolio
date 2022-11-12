import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { PorfolioApp } from './PorfolioApp'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <PorfolioApp />
    </HashRouter>
  </React.StrictMode>
)

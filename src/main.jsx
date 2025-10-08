import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Main App (mounted on #root)
const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
}

// Optional Dora App (mounted on #dora-root)
const doraRootElement = document.getElementById('dora-root')
if (doraRootElement) {
  import('./DoraApp.jsx').then(({ default: DoraApp }) => {
    createRoot(doraRootElement).render(
      <StrictMode>
        <DoraApp />
      </StrictMode>
    )
  })
}

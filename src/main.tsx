import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error("No se encontró el elemento 'root' en el documento.")
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)

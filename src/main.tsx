import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Buffer } from 'buffer'
import App from './App'
import './globals.css'

// Polyfill Buffer for gray-matter in the browser
declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}
window.Buffer = Buffer

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

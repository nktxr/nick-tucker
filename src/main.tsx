import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const container = document.getElementById('root');

if (!container) {
  throw new Error("Root element not found. Ensure <div id='root'></div> exists in index.html");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

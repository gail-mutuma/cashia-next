import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// App is a JavaScript module without TypeScript declarations.
// @ts-expect-error -- the module is a valid React component at runtime.
import App from './App.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StartScreen from './StartScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StartScreen />
  </StrictMode>,
)

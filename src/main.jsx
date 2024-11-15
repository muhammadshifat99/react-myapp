import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Confirmation from './components/Confirmation.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
   <Confirmation heading="Are you sure?" body="This item will be delated!" />
  </StrictMode>,
)

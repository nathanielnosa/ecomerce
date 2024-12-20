import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterMain from './routes/RouterMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterMain />
  </StrictMode>,
)

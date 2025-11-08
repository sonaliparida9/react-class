import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CrudExample from './component/crudOperation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CrudExample />
  </StrictMode>,
)

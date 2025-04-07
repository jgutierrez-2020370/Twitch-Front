import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'



const Main = () => {
  const elements = useRoutes(routes)
  return (
    <>
      { elements }
    </>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </StrictMode>,
)

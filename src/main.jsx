import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FilmBookmarkProvider } from './contexts/FilmBookmarkContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilmBookmarkProvider>
      <App />
    </FilmBookmarkProvider>
  </StrictMode>,
)

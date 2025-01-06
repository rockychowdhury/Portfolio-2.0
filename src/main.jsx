import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer,Bounce } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
    <App />
  </StrictMode>,
)

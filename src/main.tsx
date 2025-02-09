import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ModalProvider } from './providers/modalProvider'
import { AuthProvider } from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ModalProvider } from './providers/modalProvider';
import { AuthProvider } from './providers/AuthProvider';
import { AppointmentProvider } from './providers/AppointmentProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppointmentProvider>
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </AppointmentProvider>
  </React.StrictMode>,
);
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './components/style/index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { AdminProvider } from './context/AdminContext.jsx';
import DarkModeProvider from './components/core/DarkModeProvider.jsx';
import ErrorBoundary from './components/core/ErrorBoundary.jsx';
import { HelmetProvider } from 'react-helmet-async'; // <-- NUEVA IMPORTACIÓN

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* DarkModeProvider, ErrorBoundary y Router generalmente van fuera de HelmetProvider */}
    <DarkModeProvider>
      <ErrorBoundary>
        <Router>
          {/* HelmetProvider debe envolver todo lo que pueda usar <Helmet> */}
          <HelmetProvider> 
            <CartProvider>
              <AdminProvider>
                <AuthProvider>
                  <App />
                  <ToastContainer />
                </AuthProvider>
              </AdminProvider>
            </CartProvider>
          </HelmetProvider> 
        </Router>
      </ErrorBoundary>
    </DarkModeProvider>
  </StrictMode>,
);

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/style/index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos CSS de react-toastify
import { AuthProvider } from './context/AuthContext.jsx'
import { AdminProvider } from './context/AdminContext.jsx'
import DarkModeProvider from './components/core/DarkModeProvider.jsx'
import ErrorBoundary from './components/core/ErrorBoundary.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <ErrorBoundary>
        <Router>
          <CartProvider>
          <AdminProvider>
            <AuthProvider>
              <App />
              <ToastContainer />
            </AuthProvider>
            </AdminProvider>
          </CartProvider>
        </Router>
      </ErrorBoundary>
    </DarkModeProvider>
  </StrictMode>,
)

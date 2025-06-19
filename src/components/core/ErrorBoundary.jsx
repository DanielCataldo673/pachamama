import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos CSS de react-toastify

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(/* error */) { // <- Puedes comentar o renombrar el parámetro si no lo usas aquí
    // Actualiza el estado para mostrar la UI de fallback
    return { hasError: true };
  }

  componentDidCatch(error, info) { // <- 'error' está aquí
    // Aquí es donde loggeas el error y muestras el toast
    console.error("ErrorBoundary caught an error:", error, info);
    
    // Aquí se usa el 'error' en el toast:
    
    toast.error("¡Ups! Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.");
    
    
  }

  render() {
    if (this.state.hasError) {
      
      return <Navigate to="./estaticos/NotFound" replace />;
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;
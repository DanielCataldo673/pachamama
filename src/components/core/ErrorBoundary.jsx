import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(/* error */) {
    // Actualiza el estado para mostrar la UI de fallback
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Puedes loggear el error si quieres
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Aquí redireccionamos a NotFound o mostramos error
      return <Navigate to="./estaticos/NotFound" replace />;
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;
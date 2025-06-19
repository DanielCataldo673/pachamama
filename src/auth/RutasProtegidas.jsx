import React from 'react';
import { Navigate } from 'react-router-dom';
import loading from '../assets/img/Loading/loading2.gif';

function RutaProtegida({ isAuthenticated, isLoading, children, redirectTo = "/login" }) {
  // 1. Manejo del estado de carga:
  
  if (isLoading) {
    return <div><img className='loading' src={loading} alt="loading" /></div>; 
    
  }

  // 2. Verificación de autenticación:
  // Si el usuario no está autenticado después de que la carga ha terminado,
  // lo redirigimos a la ruta especificada.
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // 3. Renderizado del contenido protegido:
  // Si el usuario está autenticado y la carga ha terminado,
  // renderizamos los componentes hijos.
  return children;
}

export default RutaProtegida;
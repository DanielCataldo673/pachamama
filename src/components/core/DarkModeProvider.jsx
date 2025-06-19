import React, { useState, createContext, useContext, useEffect } from 'react';

// Crea un contexto para compartir el estado del modo oscuro
const DarkModeContext = createContext();

// Hook personalizado para usar el modo oscuro en cualquier componente
export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider = ({ children }) => {
  // 1. Inicializa el estado del modo oscuro a 'false' (modo claro) por defecto en cada carga.
  //    Ya no intentamos cargar desde localStorage aquí para que siempre inicie en claro.
  const [isDark, setIsDark] = useState(false);

  // 2. Guarda la preferencia del modo oscuro en localStorage cada vez que cambia 'isDark'.
  //    Esto asegura que el modo elegido persista DURANTE la sesión actual (hasta una recarga).
  useEffect(() => {
    try {
      localStorage.setItem('darkMode', isDark);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [isDark]); // Se ejecuta cada vez que 'isDark' cambia

  // Función para alternar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };

  // Función para restablecer el modo a claro (redundante en este caso si siempre inicia en claro,
  // pero útil si en el futuro decides cambiar la lógica de inicio).
  const resetToLightMode = () => {
    setIsDark(false); // Establece el estado a modo claro
    try {
      // Opcional: podrías removerlo de localStorage si quieres que refleje el estado actual
      // aunque con esta lógica, la próxima recarga igual lo pondrá en claro.
      localStorage.removeItem('darkMode'); 
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode, resetToLightMode }}>
      <div className={isDark ? 'dark-mode' : 'light-mode'}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
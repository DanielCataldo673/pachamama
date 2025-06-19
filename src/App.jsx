import { useContext } from 'react';
import "../src/components/style/App.css"; 
import NotFound from "./components/estaticos/NotFound";
import { Routes, Route } from "react-router-dom"; 
import Home from '../src/components/layout/Home';
import Aromaticas from '../src/components/layout/Aromaticas';
import Ayuda from '../src/components/layout/Ayuda';
import Contacto from '../src/components/layout/Contacto';
import Frutales from '../src/components/layout/Frutales';
import Medicinales from '../src/components/layout/Medicinales';
import Nosotros from '../src/components/layout/Nosotros';
import Ornamentales from '../src/components/layout/Ornamentales';
import Productos from '../src/components/layout/Productos';
import Suculentas from '../src/components/layout/Suculentas';
import DetallesProductos from '../src/components/core/DetallesProductos';
import Admin from './components/layout/Admin';
import RutaProtegida from './auth/RutasProtegidas';
import Login from './components/layout/Login';
import { CartContext } from './context/CartContext';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { isAuthenticated } = useContext(CartContext);

  return (
    <>
    
        <Routes>
          {/* Layout Home */}
          <Route path="/" element={<Home />} />

          {/* Layout Productos */}
          <Route path="/productos" element={<Productos />} />
          <Route path='/productos/:id' element={<DetallesProductos />} />

          {/* Layout Aromáticas */}
          <Route path="/aromaticas" element={<Aromaticas />} />

          {/* Layout Ayuda */}
          <Route path="/ayuda" element={<Ayuda />} />

          {/* Layout Contacto */}
          <Route path="/contacto" element={<Contacto />} />

          {/* Layout Admin - Ruta Protegida */}
          <Route path='/admin' element={
            <RutaProtegida isAuthenticated={isAuthenticated}>
              <Admin />
            </RutaProtegida>
          } />

          {/* Login */}
          <Route path='/login' element={<Login />} />

          {/* Otras rutas */}
          <Route path="/frutales" element={<Frutales />} />
          <Route path="/medicinales" element={<Medicinales />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/ornamentales" element={<Ornamentales />} />
          <Route path="/suculentas" element={<Suculentas />} />

          {/* componente NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      
    </>
  );
}

export default App;
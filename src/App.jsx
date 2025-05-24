// src/App.jsx o donde tengas el render principal
import { useContext } from 'react'
import "../src/components/style/App.css";
import NotFound from "./components/estaticos/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import RutaProtegida from './auth/RutasProtegidas'
import Login from './components/layout/Login';
import ErrorBoundary from './components/core/ErrorBoundary';
import { CartContext } from './context/CartContext';

function App() {
  
  const { isAuthenticated, cart, isCartOpen, setCartOpen, handleAddToCart, borrarProducto, vaciarCarrito} = useContext(CartContext)

  return (
    <>
    <ErrorBoundary>
      <Router>
        <Routes>
          {/* Layout Home */}
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          {/* Layout Productos */}
          <Route
            path="/productos"
            element={
              <Productos
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route path='/productos/:id' element={
            <DetallesProductos
              cart={cart}
              isCartOpen={isCartOpen}
              setCartOpen={setCartOpen}
              borrarProducto={borrarProducto}
              vaciarCarrito={vaciarCarrito}
              handleAddToCart={handleAddToCart}
            />} />

          {/* Layout Aromáticas */}
          <Route
            path="/aromaticas"
            element={
              <Aromaticas
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          {/* Layout Ayuda */}
          <Route
            path="/ayuda"
            element={
              <Ayuda
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          {/* Layout Contacto */}
          <Route
            path="/contacto"
            element={
              <Contacto
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          {/* Layout Admin */}
          <Route path='/admin' element={
            <RutaProtegida isAuthenticated={isAuthenticated}>
              <Admin />
            </RutaProtegida>
          } />

          {/* Login */}
          <Route path='/login' element={<Login />} />

          {/* Otras rutas */}
          <Route
            path="/frutales"
            element={
              <Frutales
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          <Route
            path="/medicinales"
            element={
              <Medicinales
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          <Route
            path="/nosotros"
            element={
              <Nosotros
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          <Route
            path="/ornamentales"
            element={
              <Ornamentales
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          <Route
            path="/suculentas"
            element={
              <Suculentas
                cart={cart}
                isCartOpen={isCartOpen}
                setCartOpen={setCartOpen}
                borrarProducto={borrarProducto}
                vaciarCarrito={vaciarCarrito}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          {/* componente NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
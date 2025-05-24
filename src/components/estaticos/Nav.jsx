import React from 'react'
import '../style/App.css'
import Cart from '../core/Cart.jsx'
import logo from '../../assets/img/Iconos/logo.png'
import { Link } from 'react-router-dom'

const Nav = ({ vaciarCarrito, cartItems, isCartOpen, setCartOpen, borrarProducto, disableCart }) => {
  // Calcular el total de artículos en el carrito
  const cartCount = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <nav style={{
      backgroundImage:
        'linear-gradient(to right, #18230F, #27391C, #255F38, #1F7D53,rgb(129, 224, 137), #1F7D53, #255F38, #27391C, #18230F)',
      height: '120px', color: 'white', fontSize: '1.4vw', fontFamily: 'Saphira DEMO , sans-serif'
    }}
    >
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/nosotros'>Nosotros</Link></li>
        <div className="dropdown">
          <li><Link className="dropdown-item" to='/productos'>Productos</Link></li>
          <div className="dropdown-content">
            <ul>
              <li><Link to='/frutales'>Frutales</Link></li>
              <li><Link to='/aromaticas'>Aromáticas</Link></li>
              <li><Link to="/medicinales">Medicinales</Link></li>
              <li><Link to="/suculentas">Suculentas</Link></li>
              <li><Link to="/ornamentales">Ornamentales</Link></li>
            </ul>
          </div>
        </div>
        <li>
          <a href='/'>
            <img 
              className='logo animate__animated animate__slow	2s animation-fill-mode: backwards; animate__zoomInDown' 
              src={logo} 
              alt='Logo' 
            />
          </a>
        </li>
        <li><Link to='/ayuda'>Ayuda</Link></li>
        <li><Link to='/contacto'>Contacto</Link></li>
        <li className='cartNav' style={{ position: 'relative' }}>
  <button
    className='btnCart'
    onClick={() => {
      if (disableCart) {
        alert('El carrito está deshabilitado en esta vista');
      } else {
        setCartOpen(true);
      }
    }}
    disabled={disableCart}
  >
    <i className="fa-solid fa-cart-shopping"></i>
  </button>

          {/* Mostrar contador solo si hay items */}
          {cartCount > 0 && (
            <span 
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-30px',
                background:' #1F7D53',
                color: 'white',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1em',
                fontWeight: 'bold',
                letterSpacing: '2.5px'
              }}
            >
              {cartCount}
            </span>
          )}
          {/* Pasamos disableCart al componente Cart para que también bloquee acciones */}
          <Cart 
            vaciarCarrito={vaciarCarrito} 
            cartItems={cartItems} 
            isOpen={isCartOpen} 
            onClose={() => setCartOpen(false)} 
            borrarProducto={borrarProducto} 
            disableCart={disableCart}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
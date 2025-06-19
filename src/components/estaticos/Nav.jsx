import React from 'react'
import '../style/App.css'
import Cart from '../core/Cart.jsx'
import logo from '../../assets/img/Iconos/logo.png'
import { NavLink } from 'react-router-dom'
import { useDarkMode } from '../core/DarkModeProvider.jsx'


const Nav = ({ vaciarCarrito, cartItems, isCartOpen, setCartOpen, borrarProducto }) => {
  // Calcular el total de artículos en el carrito
  const cartCount = cartItems.reduce((acc, item) => acc + item.cantidad, 0);
  const { isDark, toggleDarkMode } = useDarkMode();
  return (
    <nav style={{
      backgroundColor: 'rgb(129, 224, 137)',
      height: '120px', color: '#27391C', fontSize: '1.4vw', fontFamily: 'Saphira DEMO , sans-serif'
    }}
    >
      <ul>
        <li><NavLink className="link" to='/'>Inicio</NavLink></li>
        <li><NavLink className="link" to='/nosotros'>Nosotros</NavLink></li>
        <div className="dropdown">
          <li><NavLink className="link" to='/productos'>Productos</NavLink></li>
          <div className="dropdown-content">
            <ul>
              <li><NavLink to='/frutales'>Frutales</NavLink></li>
              <li><NavLink to='/aromaticas'>Aromáticas</NavLink></li>
              <li><NavLink to="/medicinales">Medicinales</NavLink></li>
              <li><NavLink to="/suculentas">Suculentas</NavLink></li>
              <li><NavLink to="/ornamentales">Ornamentales</NavLink></li>
            </ul>
          </div>
        </div>
        <li><NavLink className="link" to='/ayuda'>Ayuda</NavLink></li>
        <li>
          <a href='/'>
            <img
              className='logo animate__animated animate__slow	2s animation-fill-mode: backwards; animate__zoomInDown'
              src={logo}
              alt='Logo'
            />
          </a>
        </li>
        <li><NavLink className="link" to='/contacto'>Contacto</NavLink></li>
        <li className='cartNav link' style={{ position: 'relative' }}>
          <button
            className='btnCart'
            onClick={() => setCartOpen(true)} // Aquí abres el carrito
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
                background: ' #1F7D53',
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

          {/* Componente Cart definido anteriormente */}
          <Cart
            vaciarCarrito={vaciarCarrito}
            cartItems={cartItems}
            isOpen={isCartOpen}
            onClose={() => setCartOpen(false)}
            borrarProducto={borrarProducto}
          />
        </li>
        <li className='btnLogin link'>
          <NavLink to='/login' className='link'><i className="fa-solid fa-right-to-bracket"></i></NavLink>
        </li>
        <li className='btnAdmin link'>
          <NavLink to='/admin' className='link'><i className="fa-solid fa-user-tie"></i></NavLink>
        </li>
        <li><button className='modo link mensaje' onClick={toggleDarkMode}>
          {isDark ? <i class="fa-solid fa-sun"></i>
            : <i class="fa-solid fa-moon"></i>
          }
        </button></li>
      </ul>
    </nav>
  )
}

export default Nav;
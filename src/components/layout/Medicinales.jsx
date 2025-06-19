import React, { useContext } from 'react';
import Nav from '../estaticos/Nav';
import Footer from '../estaticos/Footer';
import ProductList from '../core/ProductList';
import Cart from '../core/Cart';
import loading from '../../assets/img/Loading/loading2.gif';
import NotFound from '../estaticos/NotFound';
import '../../components/style/App.css'
import Ofertas from '../estaticos/Ofertas';
import { CartContext } from '../../context/CartContext';
import { Helmet } from 'react-helmet';
const Medicinales = () => {
  const { cart, isCartOpen, setCartOpen, error, carga, handleRemoveFromCart, handleVaciar } = useContext(CartContext)

  if (error) return <NotFound />;

  return (
    <>
      <Helmet>
        <title>Hierbas Medicinales - PACHAMAMA</title>
      </Helmet>
      <Nav
        cartItems={cart}
        vaciarCarrito={handleVaciar}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={handleRemoveFromCart}
      />
      <header><h1>Medicinales</h1></header>
      <main>


        <p>"Explora el poder curativo de nuestras plantas medicinales. Desde la manzanilla hasta la hierba de San Juan, nuestra selección te ofrece una variedad de opciones para cuidar tu salud y bienestar. ¡Descubre cómo nuestras plantas medicinales pueden ayudarte a sentirte mejor y vivir una vida más saludable!"</p>
      </main>
      {carga ? (
        <img className='loading' src={loading} alt="loading" />
      ) : (
        <ProductList />


      )}
      <Cart cartItems={cart} />
      <Ofertas />
      <Footer />
    </>
  );
};

export default Medicinales;


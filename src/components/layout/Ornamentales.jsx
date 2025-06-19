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

const Ornamentales = () => {
  const { cart, isCartOpen, setCartOpen, error, carga, handleRemoveFromCart, handleVaciar } = useContext(CartContext)

  if (error) return <NotFound />;

  return (
    <>
      <Helmet>
        <title>Plantas Ornamentales - PACHAMAMA</title>
      </Helmet>
      <Nav
        cartItems={cart}
        vaciarCarrito={handleVaciar}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={handleRemoveFromCart}
      />
      <header><h1>Ornamentales</h1></header>
      <main>


        <p>"Agrega un toque de belleza y color a tu hogar con nuestras plantas ornamentales. Desde flores exóticas hasta plantas de follaje, nuestra selección te ofrece una variedad de opciones para decorar y embellecer tus espacios. ¡Descubre cómo nuestras plantas ornamentales pueden transformar tu hogar y mejorar tu estado de ánimo!"</p>
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

export default Ornamentales;


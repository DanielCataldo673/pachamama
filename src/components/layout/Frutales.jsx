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
const Frutales = () => {
  const { cart, isCartOpen, setCartOpen, error, carga, handleRemoveFromCart, handleVaciar } = useContext(CartContext)
  

 

  if (error) return <NotFound />;

  return (
    <>
      <Helmet>
        <title>Frutales - PACHAMAMA</title>
      </Helmet>
      <Nav
        cartItems={cart}
        vaciarCarrito={handleVaciar}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={handleRemoveFromCart}
      />
      <header><h1>Frutales</h1></header>
      <main>
        <p>"Disfruta del sabor y la frescura de nuestras frutas frescas y saludables. En nuestra sección de frutales, encontrarás una variedad de plantas que te permitirán disfrutar de deliciosas frutas en tu propio hogar. Desde cítricos hasta frutas exóticas, nuestra selección te ofrece la oportunidad de experimentar con nuevos sabores y aromas. ¡Descubre la alegría de cultivar tus propias frutas y disfruta de la recompensa de tu esfuerzo!"</p>
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

export default Frutales;


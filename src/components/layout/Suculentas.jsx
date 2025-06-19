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

const Suculentas = () => {
  const { cart, isCartOpen, setCartOpen, error, carga, handleRemoveFromCart, handleVaciar } = useContext(CartContext)

  if (error) return <NotFound />;

  return (
    <>
      <Helmet><title>
        Suculentas</title>
      </Helmet>
      <Nav
        cartItems={cart}
        vaciarCarrito={handleVaciar}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={handleRemoveFromCart}
      />
      <header><h1>Suculentas</h1></header>
      <main>


        <p>"Descubre la belleza y la resistencia de nuestras suculentas. Estas plantas únicas y fascinantes son perfectas para aquellos que buscan agregar un toque de elegancia y minimalismo a sus espacios. ¡Explora nuestra selección de suculentas y descubre cómo pueden mejorar tu hogar y tu vida!"</p>
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

export default Suculentas;


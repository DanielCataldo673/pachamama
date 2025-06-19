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

const Aromaticas = () => {
  const {cart, isCartOpen, setCartOpen, error, carga, handleRemoveFromCart, handleVaciar } = useContext(CartContext)

  if (error) return <NotFound />;

  return (
    <>
      <Helmet>
        <title>Hierbas Aromáticas - PACHAMAMA</title>
      </Helmet>
      <Nav
        cartItems={cart}
        vaciarCarrito={handleVaciar}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={handleRemoveFromCart}
      />
      <header><h1>Aromáticas</h1></header>
      <main>


        <p>"Descubre el poder de los aromas y los sabores de nuestras plantas aromáticas. Desde la lavanda hasta el romero, nuestra selección te ofrece una variedad de opciones para agregar un toque de frescura y aroma a tus comidas y espacios. ¡Explora nuestras plantas aromáticas y descubre cómo pueden mejorar tu vida diaria!"</p>
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

export default Aromaticas;


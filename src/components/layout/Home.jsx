import React from 'react';
import Nav from '../estaticos/Nav';
import Footer from '../estaticos/Footer';
import Destacados from '../estaticos/Destacados';
import Ofertas from '../estaticos/Ofertas';
import Header from '../estaticos/Header';
import SliderInicio from '../estaticos/SliderInicio';
import CardInfo from '../estaticos/CardInfo';

const Home = ({
  cart,
  isCartOpen,
  setCartOpen,
  borrarProducto,
  vaciarCarrito,
}) => {
  // Solo muestra contenido, pasa disableCart para desactivar acciones en Nav
  return (
    <>
      <Nav
        cartItems={cart}
        vaciarCarrito={vaciarCarrito}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={borrarProducto}
        disableCart={false} // Aquí indicamos que el carrito está deshabilitado
      />
      <Header />
      <main>
        <p>
          "Descubre el poder de la naturaleza en tu hogar y jardín. En Pachamama,
          nos apasiona conectar a las personas con la belleza y los beneficios de las plantas.
          Explora nuestro catálogo de plantas frutales, medicinales, aromáticas, suculentas y
          ornamentales, cultivadas con cuidado y dedicación. Nuestro compromiso es brindarte productos
          de calidad y asesoramiento personalizado para que puedas crear espacios que te inspiren
          y te hagan sentir bien. ¡Ven y descubre cómo podemos ayudarte a sembrar un poco de
          naturaleza en tu vida!"
        </p>

       

      </main>
      <SliderInicio />
      <CardInfo />
      <Ofertas />
      <Destacados />
      <Footer />
    </>
  );
};

export default Home;
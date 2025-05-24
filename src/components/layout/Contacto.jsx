import React from 'react';
import Nav from '../estaticos/Nav';
import Footer from '../estaticos/Footer';
import '../../components/estaticos/stylesEstaticos/Contacto.css'
import Formulario from '../estaticos/Formulario';

const Contacto = ({
  cart,
  isCartOpen,
  setCartOpen,
  borrarProducto,
  vaciarCarrito,
}) => {
  // Solo muestra contenido, usa props para manejar el carrito
  return (
    <>
      <Nav
        cartItems={cart}
        vaciarCarrito={vaciarCarrito}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={borrarProducto}
      />
      <header><h1>Contacto</h1></header>
      <main>
        <p>¿Quieres comunicarte con nosotros? En esta sección podrás enviarnos tus consultas, comentarios o solicitudes. Nuestro equipo estará encantado de atenderte y brindarte la mejor atención personalizada.
        </p>
 {/* Map */}
 <h2 className="contac">Ubicación</h2>
      <div className="contac-1">
        <iframe
          className="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13541.611616829216!2d-65.0664254958834!3d-31.949964627146404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2d5289abaca7b%3A0xf7df4b97b3c12fdc!2sVilla%20de%20Las%20Rosas%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1746745810992!5m2!1ses-419!2sar"
          width="800"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </div>
        <Formulario />
      </main>
      <Footer />
    </>
  );
};

export default Contacto;
import { useContext }  from 'react';
import Nav from '../estaticos/Nav';
import Footer from '../estaticos/Footer';
import '../../styles/Ayuda.css';
import { CartContext } from '../../context/CartContext';
import { Helmet } from 'react-helmet';
const Ayuda = () => {
  const{cart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito}= useContext(CartContext)
  return (
    <>
    <Helmet>
            <title>Ayuda - PACHAMAMA</title>
          </Helmet>
      <Nav
        cartItems={cart}
        vaciarCarrito={vaciarCarrito}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={borrarProducto}
      />
      <header><h1>Ayuda</h1></header>
      <main>

        <p>¿Tienes dudas o necesitas asistencia? En esta sección encontrarás respuestas a las preguntas más frecuentes sobre nuestro servicio, procesos y características. Estamos aquí para ayudarte a aprovechar al máximo nuestra plataforma.
        </p>
        <section>

          <details>
            <summary>¿Cómo puedo pagar mi pedido?</summary>
            <ol>
              <li className="pregunta">Tarjeta crédito y débito: VISA, MASTERCARD, Naranja X, Paypal. </li>
              <li className="pregunta">Dinero en Mercado Pago</li>
              <li className="pregunta">Redes de Cobranza: Pago Fácil, Rapi Pagos.</li>
              <li className="pregunta">Transferecia Bancaria</li>
            </ol>

          </details>

          <details>
            <summary>¿Puedo retirar mi pedido en la tienda?</summary>
            <p className="pregunta">Por el momento solo contamos con envios hasta el lugar acordado para la entrega de los productos comprados
            </p>
          </details>

          <details>
            <summary>¿Cómo llega mi pedido?</summary>
            <p className="pregunta">La compra te llegará a la dirección de envío
              que
              declaraste. Los envíos se realizan a través de Correo Argentino.
            </p>
          </details>

          <details>
            <summary>¿Cual es el costo de envió?</summary>
            <ol>
              <li className="pregunta">Envíos GRATIS: Compras mayores a $ 18.000 IVA Incluido.</li>
              <li className="pregunta">Envíos con costo fijo, hasta un máximo de 5 kilos: $2000 a cualquier punto del país, todas las compras
                inferiores a $ 18.000 IVA Incluido.</li>
              <li className="pregunta">Envíos con costo fijo, de 5 a 10 kilos: $3000 a cualquier punto del país, todas las compras inferiores
                a $
                18.000 IVA Incluido.</li>
            </ol>
          </details>

          <details>
            <summary>¿En cuánto tiempo puede llegar mi pedido?</summary>
            <p className="pregunta">Dependemos de Correo Argentino y sus tiempos de entrega. En Córdoba hasta 3 días hábiles
              y
              en
              el interior del país 5 días hábiles. El plazo de envío puede variar dependiendo la disponibilidad de stock
              y
              presentar demoras en fechas de descuentos.
            </p>
          </details>

          <details>
            <summary>¿Puede recibir el pedido otra persona por mí?</summary>
            <p className="pregunta">El pedido puede recibirlo cualquier persona mayor de 18 años que se encuentre en el
              domicilio
              acordado presentando su documento de identidad o dato de registro.
            </p>
          </details>

          <details>
            <summary>¿Los precios son en pesos argentinos?</summary>
            <p className="pregunta">Si, y tienen los impuestos incluidos.</p>
          </details>

          <details>
            <summary>¿Disponen de envios al exterior del pais?</summary>
            <p className="pregunta">Por el momento los envíos al exterior no se encuentran habilitados.</p>
          </details>

          <details>
            <summary>¿Ténes alguna pregunta que no esté en esta lista?</summary>
            <p className="pregunta">¿Necesitas más información sobre nuestros productos? ¿Querés hacernos una sugerencia o
              consulta? <a className='consulta' href="/contacto">Contáctanos</a></p>
          </details>

          <details>
            <summary>¿Horario de atención?</summary>
            <p className="pregunta">Lunes a Viernes de 8 hs a 19hs, Sábados 9hs a 13hs.</p>
          </details>

        </section>
      </main>
      <Footer />
    </>
  );
};

export default Ayuda;
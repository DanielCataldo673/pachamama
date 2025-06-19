import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Nav from '../estaticos/Nav';
import Footer from '../estaticos/Footer';
import '../../styles/Nosotros.css';
import foto1 from '../../assets/img/historia2-unsplash.webp'
import foto2 from '../../assets/img/paraiso.png'
import foto3 from '../../assets/img/historia4-unsplash.webp'
import foto4 from '../../assets/img/paisajismo.jpg'
import foto5 from '../../assets/img/mantenimiento5.jpg'
import foto6 from '../../assets/img/fumigacion4.jpg'
import Galeria from '../estaticos/Galeria';
import { Helmet } from 'react-helmet';



const Nosotros = () => {
  const { cart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito } = useContext(CartContext)
  return (
    <>
      <Helmet>
        <title>Nosotros - PACHAMAMA</title>
      </Helmet>
      <Nav
        cartItems={cart}
        vaciarCarrito={vaciarCarrito}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={borrarProducto}
      />

      <header><h1>Nosotros</h1></header>
      <main>

        <p>En Pachamama somos una empresa familiar apasionada por la naturaleza y el cuidado del medio ambiente. Desde nuestros orígenes, hemos dedicado nuestro esfuerzo a ofrecer un amplio catálogo de plantas que enriquecen y embellecen los hogares, jardines y espacios de todos nuestros clientes.

          En nuestra vivero, encontrarás una variedad de plantas: frutales, medicinales, aromáticas, suculentas y ornamentales, todas cultivadas con esmero y dedicación para garantizar su salud y belleza. Creemos en la importancia de conectar con la naturaleza, promover la biodiversidad y aportar bienestar a las vidas de quienes nos eligen.

          Nuestro compromiso es brindarte productos de calidad y un asesoramiento cercano, porque en Pachamama, plantamos más que plantas: sembramos confianza y respeto por la naturaleza.

        </p>

        {/* Aquí se incorpora la sección "¿Por qué elegirnos?" y las modales */}

        <h2 className='subtitulo'>¿Por qué elegirnos?</h2>
        <div className="historia-4">

          <div className="historia-item">
            <a href="#modal1"><img className="historia-3" src={foto3} alt="Honestidad y Transparencia" /></a>
            <p>Honestidad y Transparencia</p>
          </div>
          <div className="historia-item">
            <a href="#modal2"><img className="historia-3" src={foto2} alt="Creatividad e Innovación" /></a>
            <p>Creatividad e Innovación</p>
          </div>
          <div className="historia-item">
            <a href="#modal3"><img className="historia-3" src={foto1} alt="Mejores Prácticas" /></a>
            <p>Mejores Prácticas</p>
          </div>
        </div>

        <div className="historia-modal">
          <div id="modal1" className="modalmask">
            <div className="modalbox movedown">
              <a href="#close" title="Close" className="close-historia">X</a>
              <h2>Honestidad y Transparencia</h2>
              <img src={foto3} alt="Honestidad y Transparencia" />
              <p>
                La honestidad y transparencia son valores fundamentales en el funcionamiento de nuestra empresa
                familiar dedicada a la venta de plantas. Desde nuestros inicios, nos hemos comprometido a mantener una relación
                de confianza con nuestros clientes, basada en la transparencia en cada uno de nuestros procesos.

                Creemos firmemente que la honestidad es la base de cualquier relación comercial exitosa. Por ello, nos esforzamos por ofrecer productos de la más alta calidad, brindando información clara y precisa sobre el origen, la procedencia y las características de cada planta que comercializamos. Nos enorgullece poder garantizar a nuestros clientes que están adquiriendo productos genuinos y auténticos.

                Además, la transparencia en nuestra empresa se refleja en nuestra forma de operar. Nos esforzamos por mantener
                una comunicación abierta y directa con nuestros clientes, escuchando sus necesidades y preocupaciones, y
                respondiendo de manera honesta y oportuna a sus consultas.

                En definitiva, la honestidad y transparencia son los pilares sobre los cuales construimos nuestra
                empresa familiar de venta de plantas. Estos valores nos guían en cada decisión que tomamos y en cada
                interacción que tenemos con nuestros clientes, con el firme compromiso de mantener una relación duradera y honesta con quienes confían en nuestros productos y servicios.
              </p>
            </div>
          </div>
          <div id="modal2" className="modalmask">
            <div className="modalbox rotate">
              <a href="#close" title="Close" className="close-historia">X</a>
              <h2>Creatividad e Innovación</h2>
              <img src={foto2} alt="Creatividad e Innovación" />
              <p>
                La creatividad y la innovación son motores impulsores en nuestra empresa. En un mercado tan competitivo
                y en constante evolución, entendemos la importancia de mantenernos a la vanguardia, ofreciendo productos y servicios innovadores que satisfagan las necesidades cambiantes de nuestros clientes.

                La creatividad es el alma de nuestro negocio, nos inspira a explorar nuevas variedades y a presentar propuestas innovadoras que sorprendan y deleiten a nuestros clientes.
                Estamos constantemente buscando nuevas formas de presentar nuestros productos,o experiencias de compra personalizadas.

                La innovación, por su parte, nos impulsa a mejorar continuamente nuestros procesos, a adoptar nuevas tecnologías y a estar a la vanguardia de las tendencias del mercado. Buscamos constantemente nuevas formas de optimizar nuestra cadena de suministro, mejorar la calidad de nuestros productos y ofrecer servicios innovadores que agreguen valor a la experiencia de nuestros clientes.

                En resumen, la creatividad y la innovación son parte integral de nuestra filosofía empresarial. Nos comprometemos a seguir explorando nuevas ideas, a pensar de manera creativa y a innovar en cada aspecto de nuestro negocio para seguir siendo líderes en el mercado de plantas y brindar a nuestros clientes productos de la más alta calidad y experiencias únicas e inolvidables.
              </p>
            </div>
          </div>
          <div id="modal3" className="modalmask">
            <div className="modalbox resize">
              <a href="#close" title="Close" className="close-historia">X</a>
              <h2>Mejores Prácticas</h2>
              <img src={foto1} alt="Mejores Prácticas" />
              <p>
                En Pachamama , nos comprometemos a seguir las mejores prácticas en todos los aspectos de nuestro negocio.
                Desde la selección de proveedores hasta la atención al cliente, nos esforzamos por mantener los más altos
                estándares de calidad y ética en cada paso que damos.

                En lo que respecta a la selección de proveedores, nos aseguramos de trabajar únicamente con aquellos que compartan nuestros valores de calidad, sostenibilidad y responsabilidad social. Nos comprometemos a garantizar que cada planta que llega a nuestras manos ha sido producida de manera ética y respetuosa con el medio ambiente.

                Nos esforzamos por mantener instalaciones limpias y seguras, y por capacitar a nuestro personal en las mejores prácticas de manipulación.

                Además, en nuestra interacción con los clientes, nos comprometemos a brindar un servicio excepcional, basado en la honestidad, la transparencia y la atención personalizada. Estamos siempre dispuestos a escuchar las necesidades de nuestros clientes, a responder a sus preguntas y a brindarles asesoramiento experto para que puedan disfrutar al máximo de nuestros servicios.

                En resumen, en Pachamama, las mejores prácticas son más que una filosofía: son la base de nuestro compromiso con la calidad, la ética y la excelencia en todo lo que hacemos.
              </p>
            </div>
          </div>
        </div>

        {/* Sección "vmv" con la grid de valores */}
        <div className="vmv">
          <div className="contenedor-grid">
            <div className="card">
              <div className="t-3">
                <div className="thead">
                  <div className="th t-1">Visión</div>
                </div>
                <div className="tbody">
                  <div className="td t-2">
                    Ser líderes en la venta de plantas, y en el diseño y mantenimiento de espacios verdes, ofreciendo productos de alta calidad y sostenibles para el planeta.
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="t-3">
                <div className="thead">
                  <div className="th t-1">Misión</div>
                </div>
                <div className="tbody">
                  <div className="td t-2">
                    Ofrecer productos que realcen las vidas de nuestros clientes, cuidando y protegiendo el medio ambiente en cada paso de nuestra cadena de suministro.
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="t-3">
                <div className="thead">
                  <div className="th t-1">Valores</div>
                </div>
                <div className="tbody">
                  <div className="td t-2">
                    Nos comprometemos a ofrecer productos y servicios de la más alta calidad para satisfacer las necesidades de nuestros clientes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className='subtitulo'>Servicios</h2>
        <div className='container-card-nosotros'>
          <div className='card-nosotros'>
            <a href="#modal4">
              <div className='face front'>
                <img className='card-nosotros-img'
                  src={foto4} alt="Paisajismo" />
                <h3>Paisajismo</h3>
              </div>
            </a>
          </div>
          <div className='card-nosotros'>
            <a href="#modal5">
              <div className='face front'>
                <img src={foto5} alt="Mantenimiento" />
                <h3>Mantenimiento</h3>
              </div>
            </a>
          </div>
          <div className='card-nosotros'>
            <a href="#modal6">
              <div className='face front'>
                <img src={foto6} alt="Fumigación" />
                <h3>Fumigaciones</h3>
              </div>
            </a>
          </div>
        </div>
        <div className="historia-modal">
          <div id="modal4" className="modalmask">
            <div className="modalbox rotate">
              <a href="#close" title="Close" className="close-historia">X</a>
              <h2>Servicios de Paisajismo</h2>
              <img src={foto4} alt="Creatividad e Innovación" />
              <p>

                El paisajismo incluye el diseño, planificación y ejecución de espacios exteriores atractivos y funcionales. La empresa ofrece creación de jardines temáticos, implementación de céspedes, selección de plantas nativas y ornamentales, y diseño de caminos y elementos decorativos. El objetivo es transformar espacios vacíos en ambientes armoniosos, ecológicos y estéticamente agradables, adaptados a las necesidades y gustos del cliente.
              </p>
            </div>
          </div>
          <div id="modal5" className="modalmask">
            <div className="modalbox rotate">
              <a href="#close" title="Close" className="close-historia">X</a>
              <h2>Mantenimiento de Jardines</h2>
              <img src={foto5} alt="Creatividad e Innovación" />
              <p>

                El mantenimiento de jardines es esencial para mantener la belleza y salud de las áreas verdes. Incluye tareas como poda de árboles y arbustos, riego programado, fertilización, control de plagas, limpieza de céspedes y eliminación de maleza. La empresa asegura que los jardines permanezcan en perfectas condiciones durante todo el año, brindando un aspecto cuidado y saludable que prolonga la vida útil de las plantas y el diseño.
              </p>
            </div>
          </div>
          <div id="modal6" className="modalmask">
            <div className="modalbox rotate">
              <a href="#close" title="Close" className="close-historia">X</a>
              <h2>Fumigaciones</h2>
              <img src={foto6} alt="Creatividad e Innovación" />
              <p>

                Las fumigaciones son fundamentales para el control de plagas, insectos y enfermedades que afectan plantas y espacios exteriores. La empresa realiza aplicaciones de productos químicos o biológicos de manera segura y efectiva, siguiendo las normas ambientales y de salud. Esto ayuda a proteger los jardines y áreas verdes, evitando daños mayores y asegurando un entorno libre de plagas que puedan comprometer la estética o la salud de las plantas y de las personas.
              </p>
            </div>
          </div>
        </div>

        <h2 className='subtitulo'>Trabajos Realizados</h2>


        <Galeria />

        <h2 className='subtitulo'>Consejos para tus Jardines</h2>

        <div className="videos">
          <div className="videos-item">
            <a href="https://youtu.be/3OkcXj87vd0?si=44Zl6HWFerQ5UcWQ" target="_blank" rel="noopener noreferrer">
              <h3 className="videos-item-2">Los Secretos de las Plantas: Ciencia, Supervivencia y Evolución</h3>
            </a>
            <iframe width="350" height="215" src="https://www.youtube.com/embed/3OkcXj87vd0?si=rXZrXkKk_SUhaG4N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="videos-item">
            <a href="https://youtu.be/mmQLlCnCQLI?si=PHy9YQRCnsz14OZ4" target="_blank" rel="noopener noreferrer">
              <h3 className="videos-item-2">🌲 🌳 🌴Como elegir árboles y arbustos para el jardin</h3>
            </a>
            <iframe width="350" height="215" src="https://www.youtube.com/embed/mmQLlCnCQLI?si=rq9C2qQBnZw_5PVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="videos-item">
            <a href="https://youtu.be/_P-V4EyrY9c?si=JrjAAQYbAhLoEDF5" target="_blank" rel="noopener noreferrer">
              <h3 className="videos-item-2">El increíble viaje de las plantas. Stefano Mancuso, botánico y profesor</h3>
            </a>
            <iframe width="350" height="215" src="https://www.youtube.com/embed/_P-V4EyrY9c?si=zMoMd3zBuc1k4ZcW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>


        </div>

      </main>
      <Footer />
    </>
  );
};

export default Nosotros;
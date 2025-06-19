import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/img/Iconos/logo.png';
import '../estaticos/stylesEstaticos/Footer.css';
import foto1 from '../../assets/img/suculentas/Haworthia2.jpg';
import foto2 from '../../assets/img/3.jpg';
import foto3 from '../../assets/img/medicinales/manzanilla2.jpg';
import foto4 from '../../assets/img/ornamentales/Poinsettia.jpg';
import foto5 from '../../assets/img/aromaticas/lavanda.jpg';
import foto6 from '../../assets/img/ayuda2.png';
import foto7 from '../../assets/img/contacto.jpg';

const Footer = () => {
  return (
    <>
      <div className='botones-fin'>
        {/* ARRIBA*/}
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#27391C" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z" />
          </svg>
        </a>

        {/* Este enlace debería llevar a la página de inicio, por lo que usamos <Link> */}
        <div className='ultimo'>
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="#27391C" d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
            </svg>
          </Link>
        </div>

        {/* Este enlace utiliza window.history.back() para regresar en el historial del navegador. */}
        <a onClick={() => window.history.back()} style={{ cursor: 'pointer' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#27391C" d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z" />
          </svg>
        </a>
      </div>

      <div className='marquee dos'>
        <div>
          <span>Todos los derechos reservados - Pachamama - Copyright &copy; -2025 - Villa de las Rosas-Córdoba- Argentina </span>
        </div>
      </div>

      <footer>
        <div className='logo-footer'>
          {/* Enlace al inicio de la aplicación usando <Link> */}
          <Link to="/">
            <img
              className='logo-foo animate__animated animate__slow 2s animation-fill-mode: backwards; animate__zoomInDown'
              src={logo} alt="Logo" />
          </Link>
        </div>
        
        <div className='container-card-footer'>
          <div className='card-footer'>
            
            <Link to="/frutales">
              <div className='face front'>
                <img className='card-footer-img' src={foto2} alt="Frutales" />
                <h3>Frutales</h3>
              </div>
            </Link>
          </div>
          <div className='card-footer'>
            
            <Link to="/aromaticas">
              <div className='face front'>
                <img src={foto5} alt="imagen5" />
                <h3>Aromáticas</h3>
              </div>
            </Link>
          </div>
          <div className='card-footer'>
           
            <Link to="/medicinales">
              <div className='face front'>
                <img src={foto3} alt="Medicinales" />
                <h3>Medicinales</h3>
              </div>
            </Link>
          </div>
          <div className='card-footer'>
            
            <Link to="/suculentas">
              <div className='face front'>
                <img src={foto1} alt="Suculentas" />
                <h3>Suculentas</h3>
              </div>
            </Link>
          </div>
          <div className='card-footer'>
           
            <Link to="/ornamentales">
              <div className='face front'>
                <img src={foto4} alt="Ornamentales" />
                <h3>Ornamentales</h3>
              </div>
            </Link>
          </div>
          <div className='card-footer'>
           
            <Link to="/ayuda">
              <div className='face front'>
                <img src={foto6} alt="Ayuda" />
                <h3>Ayuda</h3>
              </div>
            </Link>
          </div>
          <div className='card-footer'>
            
            <Link to="/contacto">
              <div className='face front'>
                <img src={foto7} alt="Contacto" />
                <h3>Contacto</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className='redes-footer'>
          <div>
            {/* Enlace externo a Gmail, abriendo en una nueva pestaña */}
            <a href="https://workspace.google.com/intl/es-419_ar/gmail/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                <path fill="#27391C" d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
              </svg>
            </a>
          </div>
          <div>
            {/* Enlace externo a Instagram, abriendo en una nueva pestaña */}
            <a href="https://www.instagram.com/accounts/login/?source=auth_switcher&locale=es_ES" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 448 512">
                <path fill="#27391C" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
        <div className='marquee'>
          <div>
            <span>Imagenes aportadas por Flickr, Freepik, Unsplash, Pexels, Pixabay</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
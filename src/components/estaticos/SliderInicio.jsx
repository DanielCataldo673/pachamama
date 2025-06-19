import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../estaticos/stylesEstaticos/SliderInicio.css';
import { Link } from 'react-router-dom';

// Importación de imágenes
import foto1 from '../../assets/img/frutales4.jpg';
import foto2 from '../../assets/img/aromaticas3.webp';
import foto3 from '../../assets/img/suculentas.jpg';
import foto4 from '../../assets/img/medicinales3.jpg';
import foto5 from '../../assets/img/ornamentales9.jpg';

// Datos de los items
const items = [
  {
    backgroundImage: `url(${foto1})`,
    title: 'Frutales',
    description: 'Cultiva tus propias frutas frescas y deliciosas. Descubre nuestra variedad de plantas frutales y disfruta del sabor de la naturaleza en tu hogar.',
    buttonText: 'Ver más',
    ruta: '/frutales'
  },
  {
    backgroundImage: `url(${foto2})`,
    title: 'Aromáticas',
    description: 'Añade un toque de frescura y aroma a tu vida con nuestras plantas aromáticas. Descubre nuestra variedad y disfruta de los beneficios de la naturaleza.',
    buttonText: 'Ver más',
    ruta: '/aromaticas'
  },
  {
    backgroundImage: `url(${foto3})`,
    title: 'Suculentas',
    description: 'Añade un toque de elegancia y minimalismo a tu espacio con nuestras suculentas. Descubre nuestra variedad y disfruta de su belleza y resistencia.',
    buttonText: 'Ver más',
    ruta: '/suculentas'
  },
  {
    backgroundImage: `url(${foto4})`,
    title: 'Medicinales',
    description: 'Cuidado natural para tu salud y bienestar. Descubre nuestra variedad de plantas medicinales y aprovecha sus beneficios para una vida más saludable.',
    buttonText: 'Ver más',
    ruta: '/medicinales'
  },
  {
    backgroundImage: `url(${foto5})`,
    title: 'Ornamentales',
    description: 'Decora y embellece tu hogar con nuestras plantas ornamentales. Descubre nuestra variedad y disfruta de su belleza y color.',
    buttonText: 'Ver más',
    ruta: '/ornamentales'
  }
];

const SliderInicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const slideInterval = useRef();
  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length);
  }, []); // Automático

  useEffect(() => {
    if (isAutoSliding) {
      slideInterval.current = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(slideInterval.current);
  }, [isAutoSliding, handleNext]);

  const handleMouseEnter = () => {
    clearInterval(slideInterval.current);
    setIsAutoSliding(false);
  };

  const handleMouseLeave = () => {
    setIsAutoSliding(true);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     
      {/* Fondo con la imagen */}
      <div className="list" style={{ backgroundImage: currentItem.backgroundImage }}>
        {/* contenido */}
        <div className="content fondo-vidrio">
          <div className="title">{currentItem.title}</div>
          <div className="des">{currentItem.description}</div>
          <div className="btn">
            <Link to={currentItem.ruta}>
              <button>{currentItem.buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderInicio;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../estaticos/stylesEstaticos/Ofertas.css'

// Importa las imágenes directamente
import banner1 from '/img/banner1.webp';
import banner2 from '/img/banner2.webp';
import banner3 from '/img/banner3.webp';

const Ofertas = () => {
  const images = [banner1, banner2, banner3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const slideInterval = useRef();

  // Funciones para navegar
  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  }, [images.length]);
  
  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto slide con useEffect
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

  return (
   <>
    <div
      className="slide-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      <div className="slides">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={index === currentIndex ? 'active' : ''}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="buttons">
        <span className="prev" onClick={handlePrev}>&#10094;</span>
        <span className="next" onClick={handleNext}>&#10095;</span>
      </div>
      
    </div>
    </>
  );
};

export default Ofertas;
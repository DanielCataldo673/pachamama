import React from 'react';

// Importaciones de imágenes
import foto7 from '/img/paisajismo.jpg';
import foto8 from '/img/paisajismo2.jpg';
import foto9 from '/img/paisajismo3.jpg';
import foto10 from '/img/paisajismo4.jpg';
import foto11 from '/img/paisajismo6.jpg';
import foto12 from '/img/mantenimiento.jpg';
import foto14 from '/img/mantenimiento3.jpg';
import foto15 from '/img/mantenimiento4.jpg';
import foto16 from '/img/mantenimiento5.jpg';
import foto17 from '/img/mantenimiento6.jpg';
import foto13 from '/img/fumigacion2.jpg';
import foto18 from '/img/fumigacion3.jpg';
import foto19 from '/img/fumigacion4.jpg';
import foto20 from '/img/paisajismo7.jpg';
import foto21 from '/img/paisajismo8.jpg';
import foto22 from '/img/mantenimiento7.jpg';

const Galeria = () => {
  const images = [
    { src: foto7, alt: "paisajismo" },
    { src: foto8, alt: "paisajismo2" },
    { src: foto9, alt: "paisajismo3" },
    { src: foto10, alt: "paisajismo4" },
    { src: foto11, alt: "paisajismo6" },
    { src: foto12, alt: "mantenimiento" },
    { src: foto14, alt: "mantenimiento3" },
    { src: foto15, alt: "mantenimiento4" },
    { src: foto16, alt: "mantenimiento5" },
    { src: foto17, alt: "mantenimiento6" },
    { src: foto13, alt: "fumigacion2" },
    { src: foto18, alt: "fumigacion3" },
    { src: foto19, alt: "fumigacion4" },
    { src: foto20, alt: "paisajismo7" },
    { src: foto21, alt: "paisajismo8" },
    { src: foto22, alt: "mantenimiento7" },
  ];

  return (
    <div className="galeria1">
      {images.map((img, index) => (
        <div className="foto" key={index}>
          <a href={img.src} target="_blank" rel="noopener noreferrer">
            <img className="foto-1" src={img.src} alt={img.alt} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Galeria;
import React from 'react';
import { Link } from 'react-router-dom';
import '../estaticos/stylesEstaticos/Destacados.css';
import foto1 from '/img/ornamentales/Poinsettia.jpg';
import foto2 from '/img/frutales/palta.jpg';
import foto3 from '/img/medicinales/manzanilla.jpg';
import foto5 from '/img/aromaticas/menta2.jpg';
import foto6 from '/img/ornamentales/zinnia.jpg';
import foto9 from '/img/suculentas/gasteria.jpg';

function Destacados() {
  const productos = [
    { id: 49, nombre: 'Poinsettia', imagen: foto1 },
    { id: 4, nombre: 'Palta', imagen: foto2 },
    { id: 35, nombre: 'Manzanilla', imagen: foto3 },
    { id: 12, nombre: 'Menta', imagen: foto5 },
    { id: 48, nombre: 'Zinnia', imagen: foto6 },
    { id: 30, nombre: 'Gasteria', imagen: foto9 },
  ];

  return (
    <>
      <h2 className='destacados'>Destacados</h2>
     
      <div className="content-all">
        <div className="content-carousel">
          {productos.map((product) => (
            <figure key={product.id} className="card">
              <img src={product.imagen} alt={product.nombre} />
              <h3>{product.nombre}</h3>
              <Link className='vermas' to={`/productos/${product.id}`}>Ver más</Link>
            </figure>
          ))}
        </div>
      </div>
      
    </>
  );
}

export default Destacados;
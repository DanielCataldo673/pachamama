import React from 'react';
import { Link } from 'react-router-dom';
import '../estaticos/stylesEstaticos/Destacados.css';
import foto1 from '../../assets/img/frutales/mandarina.jpg';
import foto2 from '../../assets/img/frutales/palta.jpg';
import foto3 from '../../assets/img/medicinales/manzanilla.jpg';
import foto4 from '../../assets/img/medicinales/Calendula.jpg';
import foto5 from '../../assets/img/aromaticas/menta2.jpg';
import foto6 from '../../assets/img/ornamentales/zinnia.jpg';
import foto7 from '../../assets/img/ornamentales/Poinsettia2.jpg';
import foto8 from '../../assets/img/suculentas/Aadve.jpg';
import foto9 from '../../assets/img/suculentas/gasteria.jpg';

function Destacados() {
  const productos = [
    { id: 10, nombre: 'Mandarino', imagen: foto1 },
    { id: 4, nombre: 'Palta', imagen: foto2 },
    { id: 35, nombre: 'Manzanilla', imagen: foto3 },
    { id: 31, nombre: 'Caléndula', imagen: foto4 },
    { id: 12, nombre: 'Menta', imagen: foto5 },
    { id: 48, nombre: 'Zinnia', imagen: foto6 },
    { id: 49, nombre: 'Poinsettia', imagen: foto7 },
    { id: 28, nombre: 'Aadve', imagen: foto8 },
    { id: 30, nombre: 'Gasteria', imagen: foto9 },
  ];

  return (
    <>
      <h2 className='destacados'>Destacados</h2>
      <div className="content-all">
        <div className="content-carrousel">
          {productos.map((product) => (
            <figure key={product.id}>
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

import React from 'react'
import { Link } from 'react-router-dom';
import '../estaticos/stylesEstaticos/Destacados.css'
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
    { id: 10, imagen: foto1 },
    { id: 4, imagen: foto2 },
    { id: 35, imagen: foto3 },
    { id: 31, imagen: foto4 },
    { id: 12, imagen: foto5 },
    { id: 48, imagen: foto6 },
    { id: 49, imagen: foto7 },
    { id: 28, imagen: foto8 },
    { id: 30, imagen: foto9 },
   
  ];
  return (
    <>

      <h2 className='destacados'>Destacados</h2>
      <div className="content-all">

        <div className="content-carrousel">
          {productos.map((product) => (
            <>
            
            <figure key={product.id}>
              
                <img src={foto1} alt="varias2" />
             
              <h3>Mandarino</h3>
              <Link className='vermas' to={`/productos/10`}>Ver más</Link>

            </figure>
            
            <figure key={product.id}>
                
                  <img src={foto2} alt="varias3" />
                
                <h3>Palta</h3>
                <Link className='vermas' to={`/productos/4`}> Ver mas</Link>
              </figure>
              
              <figure key={product.id}>
               
                  <img src={foto3} alt="varias4" />
                
                <h3>Manzanilla</h3>
                <Link className='vermas' to={`/productos/35`}> Ver mas</Link>
              </figure>
              
              <figure key={product.id}>
                
                  <img src={foto4} alt="fondo" />
                
                <h3>Calendula</h3>
                <Link className='vermas' to={`/productos/31`}> Ver mas</Link>
              </figure>
              
              <figure key={product.id}>
                
                  <img src={foto5} />
                
                <h3>Menta</h3>
                <Link className='vermas' to={`/productos/12`}> Ver mas</Link>
              </figure>
              
              <figure key={product.id}>
                
                  <img src={foto6} alt="manuela" />
                
                <h3>Zinnia</h3>
                <Link className='vermas' to={`/productos/48`}> Ver mas</Link>
              </figure>
              
              <figure key={product.id}>
                
                  <img src={foto7} alt="jon" />
                
                <h3>Poinsettia</h3>
                <Link className='vermas' to={`/productos/49`}> Ver mas</Link>
              </figure>
              
              <figure key={product.id}>
                
                  <img src={foto8} alt="joshi" />
                
                <h3>Aadve</h3>
                <Link className='vermas' to={`/productos/28`}> Ver mas</Link>
              </figure>
              
              <figure key={product.id}>
                
                  <img src={foto9} alt="burri" />
                  <h3>Gasteria</h3>
                  <Link className='vermas' to={`/productos/30`}> Ver mas</Link>
                
              </figure>
              
              
              
              
              
              
              </>

              
          ))}
        </div>
      </div>
    </>
  )
}

export default Destacados


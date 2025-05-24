import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Nav from '../estaticos/Nav';
import Footer from '../estaticos/Footer';
import Ofertas from '../estaticos/Ofertas';
import '../style/DetallesProductos.css'

const DetallesProductos = ({ cart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito, handleAddToCart }) => {
  const { id } = useParams()
  const [productos, setProductos] = useState([]);
  const [setCarga] = useState(true);
  const [setError] = useState(false);
  const [setStocks] = useState({}); // { id: stock }

  useEffect(() => {
    fetch('/data/ListaProductos.json')
      .then(res => res.json())
      .then(datos => {
        setProductos(datos);
        const initStocks = {};
        datos.forEach(p => {
          initStocks[p.id] = p.stock;
        });
        setStocks(initStocks);
        setCarga(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(true);
        setCarga(false);
      });
  }, [setCarga, setError, setStocks]);

  const product = productos.find(productos => productos.id == id)

  const addToCart = (product) => {
    handleAddToCart(product);
  }

  return (
    <>
      <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cart.length} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto} />
      <header><h1>Producto Seleccionado</h1></header>
      <main>
        <div className='container__cartas2'>
          <div className='cartas2'>
            {product ? (<img src={product.imagen} alt={product.nombre} className="imagenPlantas" />) : (<p>Producto no encontrado</p>)}
            <div className="description2">
              {product ? (<h2>{product.nombre}</h2>) : (<p>Producto no encontrado</p>)}
              {product ? (<h3><strong>Nombre Cientifico:</strong>{product.cientifico}</h3>) : (<p>Producto no encontrado</p>)}
              {product ? (<h3><strong>Clasificación:</strong>{product.clasificacion}</h3>) : (<p>Producto no encontrado</p>)}
              {product ? (<h3><strong>Precio:</strong>${product.precio}</h3>) : (<p>Producto no encontrado</p>)}
              <h2>Descripción</h2>
              {product ? (<p>{product.descripcion}</p>) : (<p>Producto no encontrado</p>)}
              <h2>Cuidados Recomendados</h2>
              {product ? (<p>{product.cuidados}</p>) : (<p>Producto no encontrado</p>)}
              <button className="agregar" onClick={() => addToCart(product)} > Agregar </button>
            </div>
          </div>
        </div>
      </main>
      <Ofertas />
      <Footer />
    </>
  );
};

export default DetallesProductos;
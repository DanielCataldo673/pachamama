import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Product = ({
  product,
  addToCart,
  productoStock,
  isSoldOut,
  resetProductId,
}) => {
  const [cantidad, setCantidad] = useState(1);

  // Reseteo por resetProductId
  useEffect(() => {
    if (resetProductId === product.id && productoStock > 0) {
      setCantidad(1);
    } else if (productoStock === 0) {
      setCantidad(0);
    }
  }, [resetProductId, productoStock, product.id]);

  // Resetea a 1 cuando stock vuelve a estar disponible y cantidad es 0
  useEffect(() => {
    if (productoStock > 0 && cantidad === 0) {
      setCantidad(1);
    }
  }, [productoStock, cantidad]);

  const increase = () => {
    if (cantidad < productoStock) {
      setCantidad(prev => prev + 1);
    }
  };

  const decrease = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1);
    }
  };

  return (
    <section className="product">
      <div className="fondoProducto" />
      <img src={product.imagen} alt={product.nombre} className="imagenTrago" />
      <h3 className="product-name">{product.nombre}</h3>
      <p className="product-price">${product.precio}</p>
      <p className='stock'>Stock: {productoStock}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', fontSize: '1.2vw' }}>
        <button
          onClick={decrease}
          style={{
            color: '#27391C',
            fontFamily: 'Saphira DEMO , sans-serif ',
            backgroundColor: 'rgb(129, 224, 137)',
            border: ' #496538 solid',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          -
        </button>
        <span>{cantidad}</span>
        <button
          onClick={increase}
          disabled={isSoldOut}
          style={{
            color: '#27391C',
            fontFamily: 'Saphira DEMO , sans-serif ',
            backgroundColor: 'rgb(129, 224, 137)',
            border: ' #496538 solid',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: isSoldOut ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
          }}
        >
          +
        </button>
      </div>

      <button
        className="agregar"
        onClick={() => {
          addToCart({ ...product, cantidad });
        }}
        disabled={isSoldOut}
      >
        Agregar
      </button>
      <Link className="agregar2" to={`/productos/${product.id}`}> Ver mas</Link> 
      
    </section >
  );
};

export default Product;


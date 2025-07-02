import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";



const Product = ({ product, productoStock, isSoldOut }) => {
  const { handleAddToCartWithStock } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);



  // Incrementar cantidad
  const increase = () => {
    // Usamos productoStock directamente
    if (cantidad < productoStock) {
      setCantidad(prev => prev + 1);
    }
  };

  // Decrementar cantidad
  const decrease = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1);
    }
  };

  // Agregar al carrito y disminuir stock
  const agregarAlCarrito = () => {
    handleAddToCartWithStock({ ...product, cantidad });
    setCantidad(1); // resetear cantidad después de agregar
  };

  return (
    <section className='product'>
      <div className='fondoProducto' />
      <img src={product.imagen} alt={product.nombre} className='imagenTrago' />
      <h3 className='product-name'>{product.nombre}</h3>
      <p className='product-price'>${product.precio}</p>
      {/* Aquí usamos directamente productoStock */}
      <p className='stock'>Stock: {productoStock}</p>

      {/* Selector de cantidad */}
      <div className='selector-cantidad'>
        <button className='decrease' onClick={decrease}>
          <FaLessThan />
        </button>
        <span>{cantidad}</span>
        <button
          className='increase'
          onClick={increase}
          // Deshabilitar si está agotado o si la cantidad es igual o mayor al stock disponible
          disabled={isSoldOut || cantidad >= productoStock}
        >
          <FaGreaterThan />
        </button>
      </div>

      {/* Botón para agregar al carrito */}
      <button
        className='agregar'
        onClick={agregarAlCarrito}
        disabled={isSoldOut || productoStock === 0 || cantidad === 0} // También deshabilita si cantidad es 0
      >
        Agregar
      </button>
      {isSoldOut && (
        <div
          style={{
            border: ' #496538 solid',
            letterSpacing: '2px',
            width: '110px',
            textAlign: 'center',
            borderRadius: '10%',
            padding: '10px',
            backgroundColor: 'red',
            fontSize: '1.2vw',
            fontFamily: 'Saphira DEMO, sans-serif',
            marginTop: '10px',
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          Agotado
        </div>
      )
      }

      {/* Enlace para ver más detalles */}
      <Link className='agregar2' to={`/productos/${product.id}`}>
        Ver más
      </Link>
    </section >
  );
};

export default Product;
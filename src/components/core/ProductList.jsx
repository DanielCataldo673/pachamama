import React from 'react';
import Product from './Product';

const ProductList = ({ products, addToCart, stocks, resetAll, resetProductId }) => {
  return (
    <div className='galeria'>
      {products.map((product) => {
        const productoStock = stocks[product.id] ?? product.stock;
        const isSoldOut = productoStock === 0;
        return (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            productoStock={productoStock}
            isSoldOut={isSoldOut}
            resetCounter={resetAll}
            resetProductId={resetProductId} // pasa la nueva prop
          />
        );
      })}
    </div>
  );
};

export default ProductList;




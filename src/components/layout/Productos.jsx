import React, { useEffect, useState } from 'react';
import Nav from '../estaticos/Nav';
import Footer from '../estaticos/Footer';
import ProductList from '../core/ProductList';
import Cart from '../core/Cart';
import loading from '../../assets/img/Loading/loading2.gif';
import NotFound from '../estaticos/NotFound';
import '../../components/style/App.css'
import Ofertas from '../estaticos/Ofertas';

const Productos = ({ cart, handleAddToCart, isCartOpen, setCartOpen, borrarProducto, vaciarCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(false);
  const [stocks, setStocks] = useState({}); // { id: stock }
  const [resetAll, setResetAll] = useState(false); // para resetear contadores
  const [resetProductId, setResetProductId] = useState(null); // nuevo

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
  }, []);

  const handleAddToCartWithStock = (product) => {
    if (stocks[product.id] > 0) {
      handleAddToCart(product);
      setStocks(prev => ({ ...prev, [product.id]: prev[product.id] - product.cantidad }));
      setResetProductId(product.id); // resetea el contador del producto agregado
    }
  };

  const handleRemoveFromCart = (product) => {
    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
      setStocks(prev => ({ ...prev, [product.id]: prev[product.id] + 1 }));
      setResetProductId(null); // opcional, no reseteamos en remover
    }
    borrarProducto(product);
  };

  const handleVaciar = () => {
    const initStocks = {};
    productos.forEach(p => { initStocks[p.id] = p.stock; });
    setStocks(initStocks);
    setResetAll(prev => !prev);
    setResetProductId(null);
    vaciarCarrito();
  };

  if (error) return <NotFound />;

  return (
    <>

      <Nav
        cartItems={cart}
        vaciarCarrito={handleVaciar}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={handleRemoveFromCart}
      />
      <header><h1>Listado de Productos</h1></header>
      <main>
        <p>Explora nuestro catálogo completo de productos. Aquí podrás ver, buscar y obtener toda la información necesaria sobre cada uno de nuestros artículos, para que puedas elegir el que mejor se adapte a tus necesidades.
        </p>
      </main>
      {carga ? (
        <img className='loading' src={loading} alt="loading" />
      ) : (
        <ProductList
          products={productos}
          addToCart={handleAddToCartWithStock}
          stocks={stocks}
          resetAll={resetAll}
          resetProductId={resetProductId} // nuevo
        />
        
      )}
      <Cart cartItems={cart} />
      <Ofertas />
      <Footer />
    </>
  );
};

export default Productos;


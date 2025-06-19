import React, { useContext} from 'react';
import Nav from '../estaticos/Nav';
import Footer from '../estaticos/Footer';
import ProductList from '../core/ProductList';
import Cart from '../core/Cart';
import loading from '../../assets/img/Loading/loading2.gif';
import NotFound from '../estaticos/NotFound';
import '../style/App.css';
import Ofertas from '../estaticos/Ofertas';
import { CartContext } from '../../context/CartContext';
import { Helmet } from 'react-helmet';

const Productos = () => {
  const {
    cart,
    isCartOpen,
    setCartOpen,
    error,
    carga,
    handleRemoveFromCart,
    handleVaciar,
  } = useContext(CartContext);

  /* // Estado para cantidad de los productos
  const [cantidad, setCantidad] = useState(1); */

  if (error) return <NotFound />;

  return (
    <>
      <Helmet><title>
        Listado de productos - PACHAMAMA</title>
      </Helmet>
      <Nav
        cartItems={cart}
        vaciarCarrito={handleVaciar}
        cartCount={cart.length}
        isCartOpen={isCartOpen}
        setCartOpen={setCartOpen}
        borrarProducto={handleRemoveFromCart}
      />
      <header>
        <h1>Listado de Productos</h1>
      </header>
      <main>
        <p>
          Explora nuestro catálogo completo de productos. Aquí podrás ver, buscar y obtener toda la información necesaria sobre cada uno de nuestros artículos, para que puedas elegir el que mejor se adapte a tus necesidades.
        </p>
      </main>
      {carga ? (
        <img className='loading' src={loading} alt='loading' />
      ) : (
        <ProductList mostrarTodo={true} />
      )}
      <Cart cartItems={cart} />
      <Ofertas />
      <Footer />
    </>
  );
};

export default Productos;
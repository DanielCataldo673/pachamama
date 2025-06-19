import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../estaticos/Nav';
import Footer from '../estaticos/Footer';
import Ofertas from '../estaticos/Ofertas';
import '../style/DetallesProductos.css';
import { CartContext } from '../../context/CartContext';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

const DetallesProductos = () => {
  const { id } = useParams(); // Obtener el ID del producto de la URL

  const {
    vaciarCarrito,
    cart,
    borrarProducto,
    isCartOpen,
    setCartOpen,
    productos, // Necesitamos la lista completa de productos del contexto
    stocks,      // Necesitamos los stocks para el detalle
    handleAddToCartWithStock,
    carga,       // Para mostrar un estado de carga si los productos aún no están listos
    error        // Para manejar errores de carga
  } = useContext(CartContext);

  // Estado local para el producto encontrado
  const [product, setProduct] = useState(null);
  const [currentProductStock, setCurrentProductStock] = useState(0);

  useEffect(() => {
    // Si los productos ya están cargados (productos.length > 0 y no está en carga)
    // y no hay error, intentamos encontrar el producto.
    if (!carga && !error && productos.length > 0) {
      const foundProduct = productos.find(p => p.id == id); // Usar `==` si id puede ser string y p.id number
      setProduct(foundProduct);
      if (foundProduct) {
        // Asegurarse de que stocks[foundProduct.id] existe antes de asignarlo
        setCurrentProductStock(stocks[foundProduct.id] !== undefined ? stocks[foundProduct.id] : 0);
      } else {
        // Si no se encontró el producto después de cargar
        toast.error('El producto solicitado no existe.');
      }
    } else if (!carga && !error && productos.length === 0) {
      // Caso donde no hay productos en general (ej. el JSON está vacío)
      toast.info('No hay productos disponibles en el catálogo.');
    }
  }, [id, productos, stocks, carga, error]); // Dependencias: id, la lista de productos y los stocks

  // Actualizar el stock mostrado si el stock global cambia (ej. al agregar al carrito desde aquí)
  useEffect(() => {
    if (product && stocks[product.id] !== undefined) {
      setCurrentProductStock(stocks[product.id]);
    }
  }, [stocks, product]);

  const isSoldOut = currentProductStock <= 0;

  // --- Bloques de renderizado condicional ---

  // 1. Si está cargando
  if (carga) {
    return (
      <>
        <Helmet>
          <title>Detalle del Producto</title>
        </Helmet>
        <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cart.length} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto} />
        <header><h1>Producto Seleccionado</h1></header>
        <main>
          <p style={{ textAlign: 'center', margin: '50px' }}>Cargando detalles del producto...</p>
        </main>
        <Ofertas />
        <Footer />
      </>
    );
  }

  // 2. Si hubo un error al cargar los productos
  if (error) {
    return (
      <>
        <Helmet>
          <title>Detalle del Producto</title>
        </Helmet>
        <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cart.length} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto} />
        <header><h1>Error</h1></header>
        <main>
          <p style={{ textAlign: 'center', margin: '50px', color: 'red' }}>No se pudieron cargar los productos. Por favor, intente de nuevo más tarde.</p>
        </main>
        <Ofertas />
        <Footer />
      </>
    );
  }

  // 3. Si no se encuentra el producto después de cargar y sin errores
  // (Este caso se ejecuta si carga es false, error es false, y 'product' es null)
  if (!product) { 
    return (
      <>
        <Helmet>
          <title>Detalle del Producto</title>
        </Helmet>
        <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cart.length} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto} />
        <header><h1>Producto no encontrado</h1></header>
        <main>
          <div className='container__cartas2'>
            <div className='cartas2'>
              <p style={{ textAlign: 'center', width: '100%' }}>Lo sentimos, el producto que buscas no existe o no está disponible.</p>
            </div>
          </div>
        </main>
        <Ofertas />
        <Footer />
      </>
    );
  }

  // 4. Si el producto se encontró y los datos están listos 
  return (
    <>
      <Helmet>
        <title>Detalle del Producto</title>
      </Helmet>

      <Nav cartItems={cart} vaciarCarrito={vaciarCarrito} cartCount={cart.length} isCartOpen={isCartOpen} setCartOpen={setCartOpen} borrarProducto={borrarProducto} />

      <header><h1>Producto Seleccionado</h1></header>

      <main>
        <div className='container__cartas2'>
          <div className='cartas2'>
            <img src={product.imagen} alt={product.nombre} className="imagenPlantas" />
            <div className="description2">
              <h2>{product.nombre}</h2>
              <h3><strong>Nombre Científico:</strong> {product.cientifico}</h3>
              <h3><strong>Clasificación:</strong> {product.clasificacion}</h3>
              <h3><strong>Precio:</strong> ${product.precio}</h3>
              <h3><strong>Stock:</strong> {currentProductStock}</h3>

              <h2>Descripción</h2>
              <p>{product.descripcion}</p>

              <h2>Cuidados Recomendados</h2>
              <p>{product.cuidados}</p>

              <button
                className="agregar"
                onClick={() => handleAddToCartWithStock(product)}
                disabled={isSoldOut}
              >
                {isSoldOut ? 'Agotado' : 'Agregar'}
              </button>
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
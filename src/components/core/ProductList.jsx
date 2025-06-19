import React, { useContext, useState, useEffect } from 'react'; // Importamos useEffect si queremos toast al cargar inicialmente
import Product from './Product';
import { CartContext } from '../../context/CartContext';
import { useLocation } from 'react-router-dom';
import '../style/App.css';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos CSS de react-toastify





const ProductList = ({ mostrarTodo = false }) => {
  const { productos, stocks, carga, error } = useContext(CartContext); // Obtenemos 'carga' y 'error' del contexto
  const location = useLocation();
  const path = location.pathname;
  const seccion = path.split('/')[1];

  // Nuevo estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Primero, filtramos por sección o mostramos todos los productos
  const productosPorSeccion = mostrarTodo
    ? productos
    : productos.filter((product) => product.clasificacion === seccion);

  // Luego, filtramos por el término de búsqueda
  const productosMostrados = productosPorSeccion.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Efecto para notificar si no se encontraron productos después de la búsqueda
  useEffect(() => {
   
    if (!carga && !error && searchTerm.length > 0 && productosMostrados.length === 0) {
      toast.info(`No se encontraron productos para "${searchTerm}".`);
    }
  }, [searchTerm, productosMostrados, carga, error]); // Dependencias del useEffect

  
  useEffect(() => {
    if (error && !carga && productos.length === 0) {
      toast.error('Hubo un problema al cargar los productos. Por favor, intente recargar la página.');
    }
  }, [error, carga, productos.length]);


  return (
    <>
      {/* Nuevo campo de búsqueda */}
      <div className="search-bar" style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Buscar producto por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: '#27391C solid',
            color: '#27391C',
            fontFamily: 'Saphira DEMO, sans-serif',
            fontWeight: 'bold',
            padding: '10px',
            width: '80%',
            maxWidth: '500px',
            borderRadius: '5px',
            fontSize: '1em',
          }}
        />
      </div>

      <div className='galeria'>
       
        {productosMostrados.length === 0 && searchTerm.length > 0 && (
          <p style={{ textAlign: 'center', width: '100%' }}>No se encontraron productos que coincidan con su búsqueda.</p>
        )}
         {productosMostrados.length === 0 && searchTerm.length === 0 && !carga && !error && (
          <p style={{ textAlign: 'center', width: '100%' }}>No hay productos disponibles en esta sección.</p>
        )}
        
        {/* Manejo de estados de carga/error del contexto */}
        {carga && <p style={{ textAlign: 'center', width: '100%' }}>Cargando productos...</p>}
        {error && <p style={{ textAlign: 'center', width: '100%', color: 'red' }}>No se pudieron cargar los productos.</p>}


        {productosMostrados.map((product) => {
          const productoStock = (stocks && stocks[product.id] !== undefined)
            ? stocks[product.id]
            : product.stock;
          const isSoldOut = productoStock <= 0;

          return (
            <div key={product.id} style={{ marginBottom: '20px' }}>
              <Product
                product={product}
                productoStock={productoStock}
                isSoldOut={isSoldOut}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
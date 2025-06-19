import { createContext, useState, useEffect } from "react";
// Eliminamos useParams de aquí, ya que se usará en los componentes que lo necesiten
// import { useParams } from 'react-router-dom'; 
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isAuthenticated, setIsAuth] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  // Estado para campos del formulario de envío
  const [nombre, setNombre] = useState('');
  const [km, setKm] = useState('');
  const [kg, setKg] = useState('');

  // Estado para el modal de mensajes (este es tu propio modal, no el toast)
  const [modalMensaje, setModalMensaje] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);

  // Estado para manejar stocks y productos disponibles
  const [productos, setProductos] = useState([]);
  const [carga, setCarga] = useState(true);
  const [error, setError] = useState(false);
  const [stocks, setStocks] = useState({}); // { id: stock }

  // Eliminamos este estado, ya que el stock del producto actual se manejará localmente en DetallesProductos
  // const [productoStock, setProductoStock] = useState(0);

  // Eliminamos useParams y la derivación de 'product' aquí, ya que se manejará en DetallesProductos
  // const { id } = useParams(); 
  // const product = productos.find(p => p.id == id);

  // Función para cargar productos desde el JSON
  const fetchProductos = () => {
    fetch('/data/ListaProductos.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
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
        console.error('Error al cargar productos:', err);
        setError(true);
        setCarga(false);
        toast.error('Error al cargar productos. Intente de nuevo más tarde.');
      });
  };

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProductos();
  }, []);

  // Eliminamos este useEffect ya que la gestión del stock del producto actual se hace en DetallesProductos
  /*
  useEffect(() => {
    if (product) {
      setProductoStock(stocks[product.id] || 0);
    }
  }, [product, stocks]);
  */

  // Funciones para gestionar el carrito de compras
  const handleAddToCart = (producto) => {
    const productoExistente = cart.find(item => item.id === producto.id);
    if (productoExistente) {
      setCart(cart.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + (producto.cantidad || 1) }
          : item
      ));
      toast.info(`Se agregó más cantidad de ${producto.nombre} al carrito.`);
    } else {
      if (!producto.cantidad) {
        producto.cantidad = 1;
      }
      setCart(prev => [...prev, producto]);
      toast.success(`"${producto.nombre}" se agregó al carrito.`);
    }
  };

  const borrarProducto = (productoId) => {
    const productoEnCarrito = cart.find(item => item.id === productoId);

    if (!productoEnCarrito) return;

    if (productoEnCarrito.cantidad > 1) {
      setCart(cart.map(item =>
        item.id === productoId
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      ));
      setStocks(prevStocks => ({
        ...prevStocks,
        [productoId]: (prevStocks[productoId] || 0) + 1
      }));
      toast.info(`Se eliminó 1 unidad de "${productoEnCarrito.nombre}" del carrito.`);
    } else {
      setCart(prev => prev.filter(item => item.id !== productoId));
      setStocks(prevStocks => ({
        ...prevStocks,
        [productoId]: (prevStocks[productoId] || 0) + productoEnCarrito.cantidad
      }));
      toast.error(`"${productoEnCarrito.nombre}" se eliminó del carrito.`);
    }
  };

  const vaciarCarrito = () => {
    setStocks(prevStocks => {
      const newStocks = { ...prevStocks };
      cart.forEach(item => {
        newStocks[item.id] = (newStocks[item.id] || 0) + item.cantidad;
      });
      return newStocks;
    });
    setCart([]);
    // toast.warn("El carrito ha sido vaciado."); // Comentado según tu código original
  };

  const abrirModal = (mensaje) => {
    setModalMensaje(mensaje);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const totalCompra = cart.reduce(
    (acc, item) => acc + (item.precio ?? 0) * (item.cantidad ?? 0),
    0
  );

  const limpiarCampos = () => {
    setNombre('');
    setKm('');
    setKg('');
  };

  const handleCalcular = () => {
    if (!nombre.trim()) {
      abrirModal("Por favor, ingrese su nombre.");
      return;
    }
    if (km.trim() === '') {
      abrirModal("Por favor, ingrese la distancia.");
      return;
    }
    if (kg.trim() === '') {
      abrirModal("Por favor, ingrese el peso.");
      return;
    }

    const distancia = parseInt(km);
    const peso = parseInt(kg);
    if (isNaN(distancia) || distancia <= 0) {
      abrirModal("La distancia debe ser un número mayor a cero.");
      return;
    }
    if (isNaN(peso) || peso <= 0) {
      abrirModal("El peso debe ser un número mayor a cero.");
      return;
    }

    let envio;
    switch (true) {
      case distancia <= 50 && peso <= 25:
        envio = "$5.000";
        break;
      case distancia > 50 && distancia <= 100 && peso <= 25:
        envio = "$10.000";
        break;
      case distancia > 100 && distancia <= 200 && peso <= 25:
        envio = "$15.000";
        break;
      default:
        envio = 'Consultar con Pachamama, naturaleza viva para coordinar el envío.';
    }
    abrirModal("El costo de envío es: " + envio);
    toast.success("Costo de envío calculado.");
    limpiarCampos();
  };

  const handleCerrarCalculador = () => {
    limpiarCampos();
    toast.info("Campos de envío limpiados.");
  };

  const handleAddToCartWithStock = (product) => {
    // Asegurarse de que el producto y su ID existen, y que hay stock definido
    if (product && product.id !== undefined && stocks[product.id] !== undefined) {
      if (stocks[product.id] > 0) {
        const cantidadToAdd = product.cantidad || 1;
        if (stocks[product.id] >= cantidadToAdd) {
          handleAddToCart(product); // Llama a la función base para agregar al carrito
          setStocks(prev => ({ ...prev, [product.id]: prev[product.id] - cantidadToAdd }));
        } else {
          toast.error(`¡Ups! Solo quedan ${stocks[product.id]} unidades de ${product.nombre}.`);
          abrirModal(`Solo quedan ${stocks[product.id]} unidades de ${product.nombre}.`);
        }
      } else {
        toast.error(`"${product.nombre}" está agotado.`);
        abrirModal('No hay stock disponible de este producto.');
      }
    } else {
        // En caso de que el producto no se encuentre o el stock no esté inicializado
        toast.error('Error: El producto o su stock no están disponibles.');
        abrirModal('Error: No se pudo agregar el producto al carrito.');
    }
  };

  const handleRemoveFromCart = (product) => {
    borrarProducto(product.id);
  };

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <CartContext.Provider
      value={{
        handleAddToCartWithStock,
        handleRemoveFromCart,
        handleVaciar,
        carga,
        error,
        productos, // Exportamos la lista completa de productos
        stocks,    // Exportamos el objeto de stocks
        // productoStock, // Ya no es necesario exportar desde aquí
        isAuthenticated,
        setIsAuth,
        cart,
        setCart,
        isCartOpen,
        setCartOpen,
        handleAddToCart,
        borrarProducto,
        vaciarCarrito,
        nombre,
        setNombre,
        km,
        setKm,
        modalMensaje,
        setModalMensaje,
        modalAbierto,
        setModalAbierto,
        abrirModal,
        cerrarModal,
        totalCompra,
        limpiarCampos,
        kg,
        setKg,
        handleCalcular,
        handleCerrarCalculador,
        // product, // Ya no es necesario exportar product desde aquí
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
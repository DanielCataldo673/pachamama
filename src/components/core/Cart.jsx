import React, { useState } from 'react';
import '../../styles/Cart.css'
import logo from '../../assets/img/Iconos/logo.png'

const Cart = ({ vaciarCarrito, cartItems, isOpen, onClose, borrarProducto }) => {
  const [nombre, setNombre] = useState('');
  const [km, setKm] = useState('');
  const [kg, setKg] = useState('');

  // Estado para el modal
  const [modalMensaje, setModalMensaje] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);

  // Función para abrir modal
  const abrirModal = (mensaje) => {
    setModalMensaje(mensaje);
    setModalAbierto(true);
  };

  // Función para cerrar modal
  const cerrarModal = () => {
    setModalAbierto(false);
  };

  // Calcular la suma total
  const totalCompra = cartItems.reduce(
    (acc, item) => acc + (item.precio ?? 0) * (item.cantidad ?? 0),
    0
  );

  const limpiarCampos = () => {
    setNombre('');
    setKm('');
    setKg('');
  };

  const handleCalcular = () => {
    // Validar que todos los campos tengan datos
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
    limpiarCampos();
  };

  const handleCerrarCalculadora = () => {
    limpiarCampos();
  };

  return (
    <>
      {/* Carrito de compras */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className='carrito'>Carrito de Compras</h2>
          <button onClick={onClose} className="close-button">✕</button>
        </div>
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              <ul className="cart-item" style={{ listStyle: 'none', padding: 0 }}>
                {cartItems.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', border: '#000 double', backgroundColor: '#888', letterSpacing: '2px' }}>
                    {/* Mostrar imagen */}
                    <img src={item.imagen} alt={item.nombre} width="65" height="65" style={{ objectFit: 'cover' }} />

                    {/* Datos del producto */}
                    <div>
                      <div>{item.nombre}</div>
                      <div>Cant: {item.cantidad}</div>
                      <div>Subtotal: $ {((item.precio ?? 0) * (item.cantidad ?? 0)).toFixed(2)}</div>
                    </div>

                    {/* Botón borrar */}
                    <button onClick={() => borrarProducto(item)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Mostrar total */}
              {cartItems.length > 0 && (
                <div className='total'>
                  <h3>Total: ${totalCompra.toFixed(2)}</h3>
                </div>
              )}

              {/* Vaciar carrito */}
              <button className='vaciarcarrito' onClick={vaciarCarrito}>Vaciar Carrito</button>
            </>
          )}
        </div>

        {/* Sección siempre visible de la calculadora */}
        <h1 className='h1calculadora'>Calcule su Envío</h1>

        <div className="calculadora">
          <label className="label2" htmlFor="nombre">Nombre</label>
          <input
            className="input2"
            type="text"
            id="nombre"
            placeholder="Ingrese su Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <br />
          <label className="label2" htmlFor="km">Distancia</label>
          <input
            className="input2"
            type="number"
            id="km"
            placeholder="Ingrese Distancia"
            value={km}
            onChange={(e) => setKm(e.target.value)}
          />
          <br />
          <label className="label2" htmlFor="kg">Peso</label>
          <input
            className="input2"
            type="number"
            id="kg"
            placeholder="Ingrese Peso"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
          />
          <br />
          <button className="button2" onClick={handleCalcular}>Calcular</button>
          <br />
          <button className="button" onClick={handleCerrarCalculadora}>Borrar</button>
        </div>
        <br />


        {/* Modal para mostrar mensaje */}
        {modalAbierto && (
          <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}>

            <div className="modal-content" style={{
              background: '#588f6a', padding: '20px', borderRadius: '50%', maxWidth: '400px', width: '90%'
            }}>
              <img
                className='logo-cart animate__animated animate__slow	2s animation-fill-mode: backwards; animate__zoomInDown'
                src={logo}
                alt='Logo'
              />
              <p style={{ fontSize: '1.3vw', textAlign: 'center', marginLeft: '3%' }}>{modalMensaje}</p>

              <button className='cerrarcalcu' onClick={cerrarModal} style={{
                border: 'solid rgb(81, 102, 68)',
                marginLeft: '34%', marginTop: '10px', padding: '4px 5px', cursor: 'pointer', width: '33%', fontSize: '1.3vw'
              }}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
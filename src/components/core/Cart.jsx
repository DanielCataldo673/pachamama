import React, { useContext } from 'react';
import '../../styles/Cart.css';
import logo from '../../assets/img/1.jpg';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

const Cart = ({ isOpen, onClose, }) => {
  const {
    vaciarCarrito,
    cart,
    borrarProducto, // Esta función ahora no usará SweetAlert directamente aquí
    nombre,
    setNombre,
    km,
    setKm,
    modalMensaje,
    modalAbierto,
    cerrarModal,
    totalCompra,
    kg,
    setKg,
    handleCalcular,
    handleCerrarCalculador,
  } = useContext(CartContext);

  // Función para manejar el vaciado del carrito CON SweetAlert
  const handleVaciarCarritoConConfirmacion = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      iconColor: 'red',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar',
      customClass: {
        popup: 'mi-clase-popup', // clase personalizada para todo el popup
        title: 'mi-clase-title',
        confirmButton: 'mi-clase-confirm-btn',
        cancelButton: 'mi-clase-cancel-btn',
        icon: 'mi-clase-icon',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito(); // Llama a la función real del contexto para vaciar el carrito
        Swal.fire({
          title: '¡Vaciado!',
          text: 'Tu carrito ha sido vaciado.',
          icon: 'success',
          iconColor:'#27391C',
          customClass: {
            popup: 'mi-vaciado-popup', // clase personalizada para todo el popup
            title: 'mi-clase-title',
            confirmButton: 'mi-vaciado-button',
          }
        }
        );
      }
    });
  };

  return (
    <>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className='carrito'>Carrito de Compras</h2>
          <button onClick={onClose} className="close-button">✕</button>
        </div>
        <div className="cart-content">
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              <ul className="cart-item" style={{ listStyle: 'none', padding: 0 }}>
                {cart.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', border: '#27391C double', backgroundColor: 'transparent', letterSpacing: '2px' }}>
                    <img src={item.imagen} alt={item.nombre} width="65" height="65" style={{ objectFit: 'cover' }} />
                    <div>
                      <div>{item.nombre}</div>
                      <div>Cant: {item.cantidad}</div>
                      <div>Subtotal: $ {((item.precio ?? 0) * (item.cantidad ?? 0)).toFixed(2)}</div>
                    </div>
                    {/* Botón borrar: Vuelve a usar la función original sin SweetAlert aquí */}
                    <button onClick={() => borrarProducto(item.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                ))}
              </ul>

              {cart.length > 0 && (
                <div className='total'>
                  <h3>Total: ${totalCompra.toFixed(2)}</h3>
                </div>
              )}

              {/* Vaciar carrito: Ahora usa la función con SweetAlert */}
              <button className='vaciarcarrito' onClick={handleVaciarCarritoConConfirmacion}>Vaciar Carrito</button>
            </>
          )}
        </div>

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
          <button className="button" onClick={handleCerrarCalculador}>Borrar</button>
        </div>
        <br />

        {/* Modal para mostrar mensaje */}
        {modalAbierto && (
          <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: '5%', width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}>
            <div className="modal-content" style={{
              background: 'rgb(129, 224, 137)', padding: '20px', borderRadius: '2%', maxWidth: '400px', width: '90%', border: 'solid #27391C'
            }}>
              <img
                className='logo-cart animate__animated animate__slow animate__zoomInDown'
                src={logo}
                alt='Logo'
              />
              <p style={{ fontSize: '1.3vw', textAlign: 'center', marginLeft: '3%' }}>{modalMensaje}</p>
              <button className='cerrarcalcu' onClick={cerrarModal} style={{
                border: '#27391C solid', marginLeft: '34%', marginTop: '10px', padding: '4px 5px', cursor: 'pointer', width: '33%', fontSize: '1.3vw'
              }}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
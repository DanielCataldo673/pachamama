import React, { useContext } from "react";
import FormularioProducto from "../core/FormularioProducto";
import FormularioEdicion from "../core/FormularioEdicion";
import { CartContext } from "../../context/CartContext";
import { AdminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";
import '../../styles/Admin.css';
import logoAdmin from '../../assets/img/Iconos/logo.png'
import { toast } from "react-toastify";
import { MdAdminPanelSettings } from "react-icons/md";
import { Helmet } from 'react-helmet';


const Admin = () => {
  const { setIsAuth } = useContext(CartContext);

  const {
    loading,
    error,
    open,
    setOpen,
    seleccionado,
    setSeleccionado,
    openEditor,
    setOpenEditor,
    isDark,
    toggleDarkMode,
    resetToLightMode,
    paginaActual,
    setPaginaActual,
    agregarProducto,
    actulizarProducto,
    eliminarProducto,
    productosActuales,
    totalPaginas,
  } = useContext(AdminContext)

  const navigate = useNavigate();




  return (
    <div className="container13">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {/* Mostrar mensaje de error si ocurrió uno (puedes decidir si mantener este o solo usar toast) */}
          {error && <p style={{ color: 'red' }}>Error al cargar datos.</p>}
          <Helmet>
            <title>Admin- PACHAMAMA</title>
          </Helmet>
          <nav>
            <ul className="nav13">
              <li className="navItem13">
                <button
                  className="navButton13"
                  onClick={() => {
                    setIsAuth(false);
                    localStorage.removeItem('isAuth');

                    resetToLightMode(); // <-- ¡Esta es la línea clave!
                    navigate('/');
                    toast.info('Sesión cerrada correctamente.'); // Toast al cerrar sesión
                  }}
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </li>
              <li><img className="logoadmin" src={logoAdmin} alt="Logo" /></li>
              <li className="navItem13">
                <a href="/admin">Admin</a>
              </li>
              <li>
                <button className='modo link' onClick={toggleDarkMode}>
                  {isDark ? <i className="fa-solid fa-sun"></i>
                    : <i className="fa-solid fa-moon"></i>
                  }
                </button>
              </li>
            </ul>
          </nav>
          <h1 className="title13"><MdAdminPanelSettings /> &nbsp; Panel Administrativo</h1>

          <ul className="list13">
            {productosActuales.map((product) => (
              <li key={product.id} className="listItem13">
                <img
                  src={product.imagen}
                  alt={product.nombre}
                  className="listItemImage13"
                />
                <span>{product.nombre}</span>
                <span>${product.precio}</span>
                <div className="botones">
                  <button
                    className="editButton13"
                    onClick={() => {
                      setOpenEditor(true);
                      setSeleccionado(product);
                    }}
                  >
                    Editar
                  </button>

                  <button className="deleteButton13" onClick={() => eliminarProducto(product.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Navegación de páginas */}
          <div className="paginacion" style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', marginLeft: '23%', fontFamily: 'Saphira DEMO, sans-serif' }}>
            <button
              style={{ border: '#27391C solid', backgroundColor: 'rgb(129, 224, 137)', color: '#27391C', fontFamily: 'Saphira DEMO, sans-serif', fontWeight: 'bold' }}
              onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))}
              disabled={paginaActual === 1}
            >
              Anterior
            </button>

            {Array.from({ length: totalPaginas }, (_, index) => (
              <button
                key={index}
                onClick={() => setPaginaActual(index + 1)}
                className={paginaActual === index + 1 ? 'activo' : ''}
                style={{
                  margin: '0 5px',
                  border: '#27391C solid',
                  backgroundColor: paginaActual === index + 1 ? 'black' : 'rgb(129, 224, 137)',
                  color: paginaActual === index + 1 ? 'white' : '#27391C',
                  fontWeight: paginaActual === index + 1 ? 'bold' : 'normal',
                  fontFamily: 'Saphira DEMO, sans-serif'
                }}
              >
                {index + 1}
              </button>
            ))}

            <button
              style={{ border: '#27391C solid', backgroundColor: 'rgb(129, 224, 137)', color: '#27391C', fontFamily: 'Saphira DEMO, sans-serif', fontWeight: 'bold' }}
              onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))}
              disabled={paginaActual === totalPaginas}
            >
              Siguiente
            </button>
          </div>
        </>
      )}

      <button className="button13" onClick={() => setOpen(true)}>Agregar producto nuevo</button>

      {open && (
        <FormularioProducto
          onAgregar={agregarProducto}
          onCerrar={() => setOpen(false)}
        />
      )}

      {openEditor && (
        <FormularioEdicion
          productoSeleccionado={seleccionado}
          onActualizar={actulizarProducto}
          onCerrar={() => setOpenEditor(false)}
        />
      )}
    </div>
  );
};

export default Admin;
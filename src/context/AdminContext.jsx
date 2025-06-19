import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDarkMode } from '../components/core/DarkModeProvider' // Importa useDarkMode
import Swal from 'sweetalert2';
export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false);
    const apiUrl = 'https://68498c7445f4c0f5ee71f2e1.mockapi.io/API/V1/plantas';
    // Obtén isDark, toggleDarkMode y resetToLightMode del contexto
    const { isDark, toggleDarkMode, resetToLightMode } = useDarkMode(); // <-- Modificado aquí

    // Estados para paginación
    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 8;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setError(true);
                setLoading(false);
                // Toast para errores de carga inicial (opcional)
                toast.error('Error al cargar productos. Por favor, intente de nuevo.');
            });
    }, []);

    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl);
            const productosData = await res.json();
            setProductos(productosData);
        } catch (error) {
            console.log('Error al cargar productos ', error);
            // Toast para errores al recargar productos
            toast.error('Hubo un problema al recargar la lista de productos.');
        }
    };

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch('https://68498c7445f4c0f5ee71f2e1.mockapi.io/API/V1/plantas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            if (!respuesta.ok) {
                throw new Error('Error al agregar producto');
            }
            await respuesta.json();
            // ¡Aquí el toast para éxito!
            toast.success('Producto agregado correctamente.');
            cargarProductos();
            setOpen(false);
        } catch (error) {
            console.log(error.message);
            // ¡Aquí el toast para error!
            toast.error(`Error al agregar producto: ${error.message}`);
        }
    };

    const actulizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}/${producto.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
            if (!respuesta.ok) throw Error('Error al actualizar el producto');
            await respuesta.json();
            // ¡Aquí el toast para éxito!
            toast.success('Producto actualizado correctamente.');
            setOpenEditor(false);
            setSeleccionado(null);
            cargarProductos();
        } catch (error) {
            console.log(error.message);
            // ¡Aquí el toast para error!
            toast.error(`Error al actualizar producto: ${error.message}`);
        }
    };

    const eliminarProducto = async (id) => {
        // Reemplazamos window.confirm con SweetAlert2
        const { isConfirmed } = await Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            iconColor: 'red',
            showCancelButton: true,
            confirmButtonText: 'Eliminar producto',
            cancelButtonText: 'Cancelar',
            customClass: {
              popup: 'mi-clase-popup', // clase personalizada para todo el popup
              title: 'mi-clase-title',
              confirmButton: 'mi-clase-confirm-btn',
              cancelButton: 'mi-clase-cancel-btn',
              icon: 'mi-clase-icon',
            }
        });
    
        if (isConfirmed) { // isConfirmed será true si el usuario hace clic en "Sí, eliminar"
            try {
                const respuesta = await fetch(`https://68498c7445f4c0f5ee71f2e1.mockapi.io/API/V1/plantas/${id}`, {
                    method: 'DELETE',
                });
    
                if (!respuesta.ok) {
                    // Si la respuesta no es OK, lanzamos un error que será capturado por el catch
                    throw new Error('Error al eliminar el producto.');
                }
    
                // ¡Aquí el toast para éxito!
                // Asumo que 'toast.success' es una función de tu librería de toasts (ej. Toastify o react-toastify)
                toast.success('Producto eliminado correctamente.');
    
                // Vuelve a cargar los productos para actualizar la lista
                cargarProductos();
    
            } catch (error) {
                // ¡Aquí el toast para error!
                // Asumo que 'toast.error' es una función de tu librería de toasts
                toast.error('Hubo un problema al eliminar el producto.');
                console.log(error.message); // Mantener el console.log para depuración
            }
        } else {
            // Opcional: toast si el usuario cancela la eliminación
            // Asumo que 'toast.info' es una función de tu librería de toasts
            toast.info('Eliminación de producto cancelada.');
        }
    };

    // Cálculo para la paginación
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimeroProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimeroProducto, indiceUltimoProducto);

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    return (
        <AdminContext.Provider value={{
            productos,
            setProductos,
            loading,
            setLoading,
            error,
            setError,
            open, 
            setOpen,
            seleccionado, 
            setSeleccionado,
            openEditor, 
            setOpenEditor,
            apiUrl,
            isDark, 
            toggleDarkMode, 
            resetToLightMode,
            paginaActual, 
            setPaginaActual,
            productosPorPagina,
            cargarProductos,
            agregarProducto,
            actulizarProducto,
            eliminarProducto,
            indiceUltimoProducto,
            indicePrimeroProducto,
            productosActuales,
            totalPaginas,
            useDarkMode
        }}>
            {children}
        </AdminContext.Provider>
    )
}



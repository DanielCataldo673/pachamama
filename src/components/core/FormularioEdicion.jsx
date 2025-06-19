import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos CSS de react-toastify

function FormularioEdicion({ productoSeleccionado, onActualizar, onCerrar }) {
    // Inicializa el estado 'producto' con 'productoSeleccionado'
    const [producto, setProducto] = useState(productoSeleccionado);
    const [errores, setErrores] = useState({});

    // Actualiza el estado 'producto' y limpia 'errores' cada vez que 'productoSeleccionado' cambia
    useEffect(() => {
        setProducto(productoSeleccionado);
        setErrores({}); // Limpiar errores al cambiar de producto seleccionado
    }, [productoSeleccionado]);

    // Maneja los cambios en los inputs del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    // Función de validación del formulario
    const validarFormulario = () => {
        const nuevosErrores = {};

        // Validaciones para cada campo
        if (!producto.nombre || !producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }

        // Se corrigió el nombre de la propiedad a 'cientifico' para mantener consistencia
        // con FormularioProducto. Si tu backend espera 'nombrecientifico', ajústalo aquí.
        if (!producto.cientifico || !producto.cientifico.trim()) {
            nuevosErrores.cientifico = 'El nombre científico es obligatorio.';
        }

        // Validar que el precio sea un número válido y mayor a 0
        if (!producto.precio || parseFloat(producto.precio) <= 0 || isNaN(parseFloat(producto.precio))) {
            nuevosErrores.precio = 'El precio debe ser un número mayor a 0.';
        }
        
        // Validar que el stock sea un número entero válido y mayor a 0
        if (!producto.stock || parseInt(producto.stock) <= 0 || isNaN(parseInt(producto.stock))) {
            nuevosErrores.stock = 'El stock debe ser un número entero mayor a 0.';
        }

        if (!producto.clasificacion || !producto.clasificacion.trim() || producto.clasificacion.length < 5) {
            nuevosErrores.clasificacion = 'La clasificación debe tener al menos 5 caracteres.';
        }
        if (!producto.descripcion || !producto.descripcion.trim() || producto.descripcion.length < 50) {
            nuevosErrores.descripcion = 'La descripción debe tener al menos 50 caracteres.';
        }
        if (!producto.cuidados || !producto.cuidados.trim() || producto.cuidados.length < 50) {
            nuevosErrores.cuidados = 'Los cuidados deben tener al menos 50 caracteres.';
        }
        if (!producto.imagen || !producto.imagen.trim()) {
            nuevosErrores.imagen = 'La URL de la imagen es obligatoria.';
        }

        // Actualiza el estado de errores para que se muestren debajo de los inputs
        setErrores(nuevosErrores);
        
        // Retorna el objeto de errores, no solo un booleano.
        // Esto permite a handleSubmit usar los errores más recientes para los toasts.
        return nuevosErrores;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Captura los errores directamente del resultado de validarFormulario
        const erroresDetectados = validarFormulario();

        // Si hay errores, muestra cada uno como un toast y detiene el proceso
        if (Object.keys(erroresDetectados).length > 0) {
            Object.values(erroresDetectados).forEach(errorMsg => {
                toast.error(errorMsg);
            });
            return; // Detiene el envío del formulario si hay errores
        }

        // Si no hay errores, procede a actualizar el producto
        onActualizar(producto);
        onCerrar(); // Cierra el formulario después de la actualización exitosa
    };

    return (
        <form className="form13" onSubmit={handleSubmit}>
            <h2>Editar Producto</h2>

            <label>ID</label>
            <div>
                <input
                    className="input13"
                    type="number"
                    name="id"
                    value={producto.id || ''}
                    onChange={handleChange}
                    readOnly
                />
            </div>

            <label>Nombre</label>
            <div>
                <input
                    placeholder="Nombre del producto"
                    className="input13"
                    type="text"
                    name="nombre"
                    value={producto.nombre || ''}
                    onChange={handleChange}
                />
                
            </div>
            {errores.nombre && <p style={{ marginLeft:'55%', color: '#27391C', fontSize:'1.3vw' }}>{errores.nombre}</p>}

            <label>Nombre Científico</label>
            <div>
                <input
                    className="input13"
                    placeholder="Nombre Científico del producto"
                    type="text"
                    name="cientifico" 
                    value={producto.cientifico || ''} 
                    onChange={handleChange}
                />
                
            </div>
            {errores.cientifico && <p style={{ marginLeft:'55%', color: '#27391C', fontSize:'1.3vw' }}>{errores.cientifico}</p>}

            <label>Clasificación</label>
            <div>
                <input
                    placeholder="Categoría del producto"
                    className="input13"
                    type="text"
                    name="clasificacion"
                    value={producto.clasificacion || ''}
                    onChange={handleChange}
                    required
                />
               
            </div>
            {errores.clasificacion && <p style={{ marginLeft:'55%', color: '#27391C', fontSize:'1.3vw' }}>{errores.clasificacion}</p>}

            <label>Descripción</label>
            <div>
                <input
                    placeholder="Descripción del producto"
                    className="input13"
                    type="text"
                    name="descripcion"
                    value={producto.descripcion || ''}
                    onChange={handleChange}
                    required
                />
                
            </div>
            {errores.descripcion && <p style={{ marginLeft:'55%', color: '#27391C', fontSize:'1.3vw' }}>{errores.descripcion}</p>}

            <label>Precio</label>
            <div>
                <input
                    placeholder="Precio del producto"
                    className="input13"
                    type="number"
                    name="precio"
                    value={producto.precio || ''}
                    onChange={handleChange}
                    required
                    min="0"
                />
               
            </div>
            {errores.precio && <p style={{ marginLeft:'55%', color: '#27391C', fontSize:'1.2vw' }}>{errores.precio}</p>}

            <label>Stock</label>
            <div>
                <input
                    placeholder="Stock del producto"
                    className="input13"
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    required
                    min="0"
                />
                
            </div>
            {errores.stock && <p style={{ marginLeft:'55%', color: '#27391C', fontSize:'1.3vw' }}>{errores.stock}</p>}

            <label>Imagen URL</label>
            <div>
                <input
                    placeholder="URL del producto"
                    className="input13"
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}
                    
                />
                
            </div>
            {errores.imagen && <p style={{ marginLeft:'55%', color: '#27391C', fontSize:'1.3vw' }}>{errores.imagen}</p>}

            <label>Cuidados Recomendados</label>
            <div>
                <input
                    placeholder="Cuidados Recomendados del producto"
                    className="input13"
                    type="text"
                    name="cuidados"
                    value={producto.cuidados || ''}
                    onChange={handleChange}
                    required
                />
                
            </div>
            {errores.cuidados && <p style={{ marginLeft:'55%', color: '#27391C', fontSize:'1.3vw' }}>{errores.cuidados}</p>}


            <button className="button13" type="submit">Actualizar Producto</button>
            <button className="button13" type="button" onClick={onCerrar}>Cerrar</button>
        </form>
    );
}

export default FormularioEdicion;
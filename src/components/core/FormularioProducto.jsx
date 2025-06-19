import React, { useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos CSS de react-toastify

function FormularioProducto({ onAgregar, onCerrar }) {
    const [producto, setProducto] = useState({
        nombre: '',
        cientifico: '',
        descripcion: '',
        cuidados: '',
        precio: '',
        stock: '',
        imagen: '',
        clasificacion: '',
    });
    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};

        // Validaciones para cada campo

        // --- CAMBIO CLAVE AQUÍ: Eliminamos 'required' del JSX para que esta validación se ejecute ---
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }

        // --- CAMBIO CLAVE AQUÍ: Eliminamos 'required' del JSX para que esta validación se ejecute ---
        if (!producto.cientifico.trim()) { // Simplificamos la comprobación inicial, .trim() se encargará de ambos
            nuevosErrores.cientifico = 'El nombre científico es obligatorio.';
        }

        // Validar que el precio sea un número y mayor a 0
        if (!producto.precio || parseFloat(producto.precio) <= 0 || isNaN(parseFloat(producto.precio))) {
            nuevosErrores.precio = 'El precio debe ser un número mayor a 0.';
        }

        // Validar que el stock sea un número entero y mayor a 0
        if (!producto.stock || parseInt(producto.stock) <= 0 || isNaN(parseInt(producto.stock))) {
            nuevosErrores.stock = 'El stock debe ser un número entero mayor a 0.';
        }

        if (!producto.clasificacion.trim() || producto.clasificacion.length < 5) {
            nuevosErrores.clasificacion = 'La clasificación debe tener al menos 5 caracteres.';
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 50) {
            nuevosErrores.descripcion = 'La descripción debe tener al menos 50 caracteres.';
        }
        if (!producto.cuidados.trim() || producto.cuidados.length < 50) {
            nuevosErrores.cuidados = 'Los cuidados deben tener al menos 50 caracteres.';
        }
        // --- CAMBIO CLAVE AQUÍ: Eliminamos 'required' del JSX para que esta validación se ejecute ---
        if (!producto.imagen.trim()) {
            nuevosErrores.imagen = 'La URL de la imagen es obligatoria.';
        }

        // Actualiza el estado de errores para que se muestren debajo de los inputs
        setErrores(nuevosErrores);

        // Retorna el objeto de errores para que handleSubmit pueda usarlo inmediatamente
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

        // Si no hay errores, procede a agregar el producto
        onAgregar(producto);

        // Limpieza del formulario después de agregar
        setProducto({
            nombre: '',
            cientifico: '',
            descripcion: '',
            cuidados: '',
            precio: '',
            stock: '',
            imagen: '',
            clasificacion: '',
        });
        onCerrar(); // Cerrar el formulario
    };

    return (
        <form className="form13" onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <label>Nombre</label>
            <div>
                <input
                    className="input13"
                    placeholder="Nombre del producto"
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                // Eliminado 'required' para permitir que React maneje la validación
                />

            </div>
            {errores.nombre && <p style={{ marginLeft: '55%', color: '#27391C', fontSize: '1.3vw' }}>{errores.nombre}</p>}

            <label>Nombre Científico</label>
            <div>
                <input
                    className="input13"
                    placeholder="Nombre Científico del producto"
                    type="text"
                    name="cientifico"
                    value={producto.cientifico}
                    onChange={handleChange}
                // Eliminado 'required' para permitir que React maneje la validación
                />

            </div>
            {errores.cientifico && <p style={{ marginLeft: '55%', color: '#27391C', fontSize: '1.3vw' }}>{errores.cientifico}</p>}

            <label>Precio</label>
            <div>
                <input
                    placeholder="Precio del producto"
                    className="input13"
                    type="number"
                    name="precio"
                    value={producto.precio}
                    onChange={handleChange}
                    required // Mantenemos 'required' ya que la validación de número es crítica y puede ser manejada por el navegador inicialmente.
                    // Nuestra validación de parseFloat/isNaN complementa esto.
                    min="0"
                />

            </div>
            {errores.precio && <p style={{ marginLeft: '55%', color: '#27391C', fontSize: '1.2vw' }}>{errores.precio}</p>}

            <label>Stock</label>
            <div>
                <input
                    placeholder="Stock del producto"
                    className="input13"
                    type="number"
                    name="stock"
                    value={producto.stock}
                    onChange={handleChange}
                    // Mantenemos 'required' por la misma razón que el precio.
                    min="0"
                />

            </div>
            {errores.stock && <p style={{ marginLeft: '55%', color: '#27391C', fontSize: '1.3vw' }}>{errores.stock}</p>}

            <label>Imagen URL</label>
            <div>
                <input
                    placeholder="URL del producto"
                    className="input13"
                    type="text"
                    name="imagen"
                    value={producto.imagen}
                    onChange={handleChange}
                // Eliminado 'required' para permitir que React maneje la validación
                />

            </div>
            {errores.imagen && <p style={{ marginLeft: '55%', color: '#27391C', fontSize: '1.3vw' }}>{errores.imagen}</p>}

            <label>Clasificación</label>
            <div>
                <input
                    placeholder="Categoría del producto"
                    className="input13"
                    type="text"
                    name="clasificacion"
                    value={producto.clasificacion}
                    onChange={handleChange}
                    required // Mantener 'required' ya que la validación es solo de longitud, no de formato numérico especial.
                />

            </div>
            {errores.clasificacion && <p style={{ marginLeft: '55%', color: '#27391C', fontSize: '1.3vw' }}>{errores.clasificacion}</p>}

            <label>Descripción</label>
            <div>
                <input
                    placeholder="Descripción del producto"
                    className="input13"
                    type="text"
                    name="descripcion"
                    value={producto.descripcion}
                    onChange={handleChange}
                    required // Mantener 'required'
                />

            </div>
            {errores.descripcion && <p style={{ marginLeft: '55%', color: '#27391C', fontSize: '1.3vw' }}>{errores.descripcion}</p>}

            <label>Cuidados Recomendados</label>
            <div>
                <input
                    placeholder="Cuidados Recomendados del producto"
                    className="input13"
                    type="text"
                    name="cuidados"
                    value={producto.cuidados}
                    onChange={handleChange}
                    required // Mantener 'required'
                />

            </div>
            {errores.cuidados && <p style={{ marginLeft: '55%', color: '#27391C', fontSize: '1.3vw' }}>{errores.cuidados}</p>}

            <button className="button13" type="submit">Agregar Producto</button>
            <button className="button13" type="button" onClick={onCerrar}>Cerrar</button>
        </form>
    );
}

export default FormularioProducto;
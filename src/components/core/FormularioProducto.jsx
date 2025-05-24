import React, { useState } from 'react';

function FormularioProducto({ onAgregar, onClose }) {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
    });
    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }
        
        onAgregar(producto); // Llamada a la función para agregar el producto
        setProducto({ nombre: '', precio: '', descripcion: '' }); // Limpiar el formulario
        if (onClose) {
            onClose(); // Cerrar el formulario después de agregar
        }
    };

    return (
        <form className='form-agregar' onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <label>Nombre</label>
            <div>
                <input
                   className='input13' 
                   type="text" 
                   placeholder='Ingrese el nombre' 
                   name="nombre" 
                   value={producto.nombre} 
                   onChange={handleChange} 
                   required 
                />
                {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
            </div>
            <label>Precio</label>
            <div>
                <input
                   className='input13' 
                   placeholder='Ingrese el precio' 
                   type="number" 
                   name="precio" 
                   value={producto.precio} 
                   onChange={handleChange} 
                   required
                   min="0" 
                />
                {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
            </div>
            <label>Descripción</label>
            <div>
                <textarea
                    className='text-agregar'
                    name="descripcion"
                    value={producto.descripcion}
                    onChange={handleChange}
                    required
                />
                {errores.descripcion && <p style={{ color: 'red' }}>{errores.descripcion}</p>}
            </div>
            <button type="submit">Agregar Producto</button>
            {/* Botón para cerrar el formulario */}
            {onClose && (
                <button type="button" onClick={onClose}>
                    Cancelar
                </button>
            )}
        </form>
    );
}

export default FormularioProducto;
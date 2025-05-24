import React, { useState, useEffect } from "react";
import FormularioProducto from "../core/FormularioProducto";
import "../../styles/Admin.css";
import logoAdmin from "../../assets/img/Iconos/logo.png";
import { Link } from "react-router-dom";

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    /* const [form] = useState({ id: null, nombre: "", precio: "" }); */

    useEffect(() => {
        fetch("/data/ListaProductos.json")
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data);
                    setLoading(false);
                }, 2000);
            });
    }, []);

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(
                "https://682e2f0e746f8ca4a47c2dbd.mockapi.io/product",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(producto),
                }
            );
            if (!respuesta.ok) {
                throw new Error("Error al agregar producto");
            }
            const data = await respuesta.json(); // La respuesta del API
            console.log(data); // Esto evita la advertencia y ayuda a verificar la respuesta
            alert("Producto agregado correctamente");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="container13">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <nav>
                        <ul className="nav13">
                            <li className="navItem13">
                                <button className="navButton13">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li>
                                <Link to="/">
                                    <img className="logoadmin" src={logoAdmin} alt="Logo" />
                                </Link>
                            </li>
                            <li className="navItem13">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <header>
                        <h1 className="AdminHeader">PACHAMAMA, naturaleza viva</h1>
                    </header>
                    <h2 className="title13">Panel Administrativo</h2>
                    <div className="agregarProduct">
                        <button onClick={() => setOpen(true)}>Agregar producto nuevo</button>
                        {open && (
                            <FormularioProducto
                                onAgregar={agregarProducto}
                                onClose={() => setOpen(false)}
                            />
                        )}
                    </div>
                    <h2 className="tabla">Tabla para mostrar los productos existentes</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Nombre Cientifico</th>
                                <th>Imagen</th>
                                <th>Clasificacion</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Descripción</th>
                                <th>Cuidados Recomendados</th>
                                <th>Funciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.nombre}</td>
                                    <td>{product.cientifico}</td>
                                    <td>
                                        <img
                                            className="imagenAdmin"
                                            src={product.imagen}
                                            alt={product.nombre}
                                        />
                                    </td>
                                    <td>{product.clasificacion}</td>
                                    <td>{product.stock}</td>
                                    <td>${product.precio}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.cuidados}</td>
                                    <td>
                                        <div className="botontabla">
                                            <button className="editButton13">Editar</button>
                                            <button className="deleteButton13">Eliminar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Admin;
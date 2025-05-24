import { createContext, useState} from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [isAuthenticated, setIsAuth] = useState(false); // Corrección aquí
    // Estado para el carrito
    const [cart, setCart] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);

    // Función para agregar productos al carrito
    const handleAddToCart = (producto) => {
        // Verifica si el producto ya está en el carrito
        const productoExistente = cart.find(item => item.id === producto.id);
        if (productoExistente) {
            // Si existe, actualiza la cantidad
            setCart(cart.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + producto.cantidad }
                    : item
            ));
            return;
        }
        // Si no existe, añade el producto al carrito
        if (!producto.cantidad) {
            producto.cantidad = 1; // Asigna una cantidad por defecto si no existe
        }
        setCart(prev => [...prev, producto]);
    };

    // Función para eliminar un producto del carrito
    const borrarProducto = (producto) => {
        const productoExistente = cart.find(item => item.id === producto.id);
        if (!productoExistente) return;
        if (productoExistente.cantidad > 1) {
            setCart(cart.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            ));
            return;
        }
        if (productoExistente.cantidad === 1) {
            setCart(prev => prev.filter(item => item.id !== producto.id));
            return;
        }
    };

    // Función para vaciar el carrito
    const vaciarCarrito = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider 
        
        value={{ isAuthenticated, setIsAuth, cart, setCart, isCartOpen, setCartOpen, handleAddToCart, borrarProducto, vaciarCarrito }}>


            {children}

        </CartContext.Provider>
    )
}
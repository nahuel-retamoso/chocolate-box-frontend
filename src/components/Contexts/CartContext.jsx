import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  const removeById = (id) => {
    setCart((prevCart) => {
        // Filtrar el array cart para obtener todas las cajas, excepto la que tiene el ID especificado.
        const updatedCart = prevCart.filter((item) => Object.keys(item)[0] !== id.toString());

        return updatedCart;
    });
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeById }}>
      {children}
    </CartContext.Provider>
  );
};

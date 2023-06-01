import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Intenta obtener los datos del carrito desde sessionStorage al cargar la página.
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });

  useEffect(() => {
    // Cada vez que el carrito cambia, guarda su estado en sessionStorage.
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

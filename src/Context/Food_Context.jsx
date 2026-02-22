import React, { createContext, useState } from "react";

import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const Food_Context = (props) => {
  const currency = "$";
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  const cartCount = cart.reduce((total, item) => {
    return total + Number(item.quantity || 0);
  }, 0);

  // const cartTotal = cart.reduce((total, item) => {
  //   return total + Number(item.price || 0) * Number(item.quantity || 0);
  // }, 0);

  const increment = (product) => {
  setCart(prev => {
    const existing = prev.find(item => item._id === product._id);

    if (existing) {
      return prev.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};

const decrement = (id) => {
  setCart(prev =>
    prev
      .map(item =>
        item._id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};


  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item._id === product._id);
      if (existingItem) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setCart((prev) =>
      prev.map((item) => (item._id === id ? { ...item, quantity } : item)),
    );
  };

  const value = {
    products,
    currency,
    cart,
    setCart,
    cartCount,
    // cartTotal,
    increment,
    decrement,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return (
    <div>
      <Context.Provider value={value}>{props.children}</Context.Provider>
    </div>
  );
};

export default Food_Context;

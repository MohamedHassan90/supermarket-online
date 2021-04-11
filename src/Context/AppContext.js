import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

export default function AppProvider(props) {
  const [ cart, setCart ] = useState(() => { 
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [name, setName] = useState(() => {
    return localStorage.getItem("appName") || "Super Market"
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleProductAdd(newProduct) {
    const productIdx = cart.findIndex(product => product.id === newProduct.id);
    if (productIdx === -1) {
      newProduct.quantity = 1;
      setCart(prevCart => [...prevCart, newProduct]);
    } else {
      const existingCart = [...cart];
      const product = existingCart[productIdx];
      product.quantity += 1;
      setCart(existingCart);
    }
  }

  function handleProductDelete(id) {
    const modifiedCart = cart.filter(product => id !== product.id)
    setCart(modifiedCart);
  }

  function getTotalQuantity() {
    const sum = cart.reduce((accumulator, product) => {
      return accumulator + product.quantity
    }, 0);
    return sum;
  }

  function getTotalPrice() {
    return cart.reduce((acc, product) => {
      return (product.quantity * product.price) + acc
    }, 0);
  }

  function getProductFromCart(target) {
    const productIdx = cart.findIndex(product => product.id === target.id);
    if (productIdx === -1) {
      return null; 
    }
    return cart[productIdx];
  }

  const appContext = {
    cart,
    handleProductAdd,
    handleProductDelete,
    getTotalQuantity,
    getTotalPrice,
    getProductFromCart,
    name,
    setName
  }

  return <AppContext.Provider value={appContext}>
    {props.children}
  </AppContext.Provider>
}

export { AppContext, AppProvider };
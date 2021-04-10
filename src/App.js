import React, { useState, useEffect } from "react";
import {Switch, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import './App.css';

function App() {
  // Lazy initial state
  const [ cart, setCart ] = useState(() => { 
    return JSON.parse(localStorage.getItem("cart")) || [];
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

  return (<>
    <Navbar cart={cart} />
    <div className="container">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products
            cart={cart}
            onProductAdd={handleProductAdd}
            onProductDelete={handleProductDelete}
          />
        </Route>
        <Route path="/products/:id">
          <ProductDetails onProductAdd={handleProductAdd} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} />
        </Route>
      </Switch>
    </div>
  </>);
}

export default App;

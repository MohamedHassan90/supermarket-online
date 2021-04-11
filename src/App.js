import React from "react";
import {Switch, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import './App.css';

function App() {
  return (<>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  </>);
}

export default App;

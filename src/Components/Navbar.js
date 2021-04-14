import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import AppTitle from "./AppTitle";
import "../UIKit/css/Nav.css";
import "../UIKit/css/Button.css";

export default function Navbar(props) {
  const [theme, setTheme] = useState("Dark");
  const { getTotalQuantity } = useContext(AppContext);

  useEffect(() => {
    let bodyEl = document.querySelector('body');
    if (theme === "Light") {
      bodyEl.classList.add('dark');
    } else {
      bodyEl.classList.remove('dark');
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === 'Light') {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  }

  return (
    <nav className="navbar">
      <AppTitle />
      <ul>
        <li className="nav-item">
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
          <label>Dark</label>
        </li>
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" activeClassName="active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">Cart ({getTotalQuantity()})</NavLink>
        </li>
      </ul>
    </nav>
  );
}
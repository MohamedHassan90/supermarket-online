import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import AppTitle from "./AppTitle";
import "../UIKit/css/Nav.css";
import "../UIKit/css/Button.css";

export default function Navbar(props) {
  const { getTotalQuantity } = useContext(AppContext);

  return (
    <nav className="navbar">
      <AppTitle />
      <ul>
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
import React from "react";
import { NavLink } from "react-router-dom";
import "../UIKit/css/Nav.css";
import "../UIKit/css/Button.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <NavLink to="/" activeClassName="active" className="nav-brand">Super Market</NavLink>
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
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">Cart (0)</NavLink>
        </li>
      </ul>
    </nav>
  );
}
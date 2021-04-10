import React from "react";
import "../UIKit/css/Pages.css";

export default function Cart(props) {
  const { cart } = props;

  const totalCart = cart.reduce((acc, product) => {
    return (product.quantity * product.price) + acc
  }, 0);

  const items = cart.map(product => {
    const {name, image, price, quantity} = product;
    return <tr key={product.id}>
        <td>
          <img width="30" height="30" src={image} alt={name} />
          {name}
        </td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <strong>${quantity* price}</strong>
        </td>
      </tr>
  });


  if (cart.length === 0) {

  }

  return <div className="cart-layout">
    <div>
      <h1>Your Cart</h1>
      {
        cart.length === 0 ?
        <p>You have not added any product to your cart yet.</p>
        :
        <table className="table table-cart">
        <thead>
          <tr>
            <th width="25%" className="th-product">Product</th>
            <th width="20%">Unit price</th>
            <th width="10%">Quanity</th>
            <th width="25%">Total</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="2"></th>
            <th className="cart-highlight">Total</th>
            <th className="cart-highlight">${totalCart}</th>
          </tr>
        </tfoot>
      </table>
      }
    </div>
  </div>;
}
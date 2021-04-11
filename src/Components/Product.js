import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Button from "../UIKit/Button";
import { AppContext } from "../Context/AppContext";

import '../UIKit/css/Products.css';

export default function Product(props) {
  const { handleProductAdd, handleProductDelete, getProductFromCart } = useContext(AppContext);
  const { details } = props;
  const product = getProductFromCart(details);
  const quantity = (product && product.quantity) || 0;

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${details.id}`}>
          <img width="100" height="100" className="product-image" src={details.image} alt={details.name} />
          <div className="product-quantity-container">
            { quantity === 0 ? null: <div className="product-quantity">{quantity}</div>}
          </div>       
        </Link>
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
          { quantity === 0 ? null: 
            <Button outline className="product-delete" onClick={handleProductDelete.bind(null, details.id)}>x</Button>
          }
        </div>
        <Button outline onClick={handleProductAdd.bind(null, details)}>${details.price}</Button>
      </div>
    </div>

  );
}
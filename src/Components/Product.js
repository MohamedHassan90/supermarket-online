import React from 'react';
import Button from "../UIKit/Button";
import '../UIKit/css/Products.css';

export default function Product(props) {
  const { details } = props;

  return (
    <div className="product">
      <div className="product-image-container">
        <img width="100" height="100" className="product-image" src={details.image} alt={details.name} />
        <div className="product-quantity-container">
          <div className="product-quantity">0</div>
        </div>
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <div>
            <Button outline className="product-delete">x</Button>
        </div>
        <Button outline>${details.price}</Button>
      </div>
    </div>
  );
}
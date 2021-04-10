import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Button from "../UIKit/Button";
import '../UIKit/css/Products.css';

export default function Product(props) {
  const { details, cart } = props;
  const [quantity, setQuantity] = useState(getProductQuantity());
  
  function getProductQuantity() {
    const productIdx = props.cart.findIndex(product => product.id === details.id);
    if (productIdx === -1) {
      return 0; 
    }
    return cart[productIdx].quantity;
  }

  function handleProductAdd() {
    props.onProductAdd();
    setQuantity(quantity => quantity + 1);
  }

  function handleProductDelete() {
    props.onProductDelete();
    setQuantity(0);
  }

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
            <Button outline className="product-delete" onClick={handleProductDelete}>x</Button>
          }
        </div>
        <Button outline onClick={handleProductAdd}>${details.price}</Button>
      </div>
    </div>

  );
}
import React, { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import Product from "./Product";
import Loader from "../UIKit/Loader";
import '../UIKit/css/Pages.css';
import '../UIKit/css/Products.css';

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { get, isLoading } = useFetch("https://react-tutorial-demo.firebaseio.com/");

  useEffect(() => {
    get("supermarket.json")
    .then(data => {
      setProducts(data);
    })
    .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="products-layout">
    <h1>Products</h1>
    <p>Take a look at our products</p>
    <div className="products-grid">
      { isLoading && <Loader /> }
      {
        products.map(product => {
          return <Product 
            key={product.id} 
            details={product}
            cart={props.cart}
            onProductAdd={props.onProductAdd.bind(null, product)}
            onProductDelete={props.onProductDelete.bind(null, product.id)} 
          />
        })
      }
    </div>
  </div>;
}
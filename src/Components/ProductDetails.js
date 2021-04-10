import React, { useState, useEffect } from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import ProductDetailsInfo from "./ProductDetailsInfo";
import ProductDetailsNutrition from "./ProductDetailsNutrition";
import ProductDetailsStorage from "./ProductDetailsStorage";
import useFetch from "../Hooks/useFetch";
import Loader from "../UIKit/Loader";

export default function ProductDetails(props) {
  const [ product, setProduct ] = useState();
  const match = useRouteMatch();
  const { get, isLoading } = useFetch("https://react-tutorial-demo.firebaseio.com/")
  
  useEffect(() => {
    get(`productinfo/id${match.params.id}.json`)
      .then(data => {
        setProduct(data);
      })
      .catch(err => console.log(err))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader />
  }

  return <div className="product-details-layout">
    <div>
      <h1>{product.name}</h1>
      <img width="125" height="125" src={product.image} alt={product.name} className="product-details-image" />
    </div>
    <div>
      <div className="tabs">
        <ul>
          <li>
            <NavLink exact to={`${match.url}`} activeClassName="tab-active">Details</NavLink>
          </li>
          <li>
            <NavLink exact to={`${match.url}/nutrition`} activeClassName="tab-active">Nutrition</NavLink>
          </li>
          <li>
            <NavLink exact to={`${match.url}/storage`} activeClassName="tab-active">Storage</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path={`${match.path}`}>
          <ProductDetailsInfo details={product} onProductAdd={props.onProductAdd.bind(null, product)} />
        </Route>
        <Route exact path={`${match.path}/nutrition`}>
          <ProductDetailsNutrition nutrition={product.nutrition} />
        </Route>
        <Route exact path={`${match.path}/storage`}>
          <ProductDetailsStorage storage={product.storage} />
        </Route>
      </Switch>
    </div>
  </div>;
}
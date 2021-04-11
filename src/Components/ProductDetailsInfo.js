import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Button from "../UIKit/Button";

export default function ProductDetailInfo(props) {
  const { handleProductAdd } = useContext(AppContext);
  const {details} = props;

  return <>
    <p>
      {details.description} sold at <strong>${details.price}</strong> per piece.
    </p>
    <Button outline onClick={handleProductAdd.bind(null, details)}>${details.price}</Button>
  </>;
}
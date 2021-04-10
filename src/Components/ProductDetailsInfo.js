import React from "react";
import Button from "../UIKit/Button";

export default function ProductDetailInfo(props) {
  const {details} = props;
  return <>
    <p>
      {details.description} sold at <strong>${details.price}</strong> per piece.
    </p>
    <Button outline onClick={props.onProductAdd}>${details.price}</Button>
  </>;
}
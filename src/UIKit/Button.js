import React from "react";
import clsx from "clsx";
import "./css/Button.css";

export default function Button(props) {
  const {className, children, outline, ...rest} = props;
  const classes = clsx({
      btn: true,
      "btn-outline": outline,
      "btn-default": !outline
    },
    className
  );
  return (
    <button className={classes} {...rest}>{children}</button>
  );
}
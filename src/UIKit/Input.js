import React from "react";
import clsx from "clsx";
import "./input.css";

export default function Input(props) {
  const {type="text", className, placeholder, required, ...rest } = props;
  const classes = clsx("input", className);

  return (
    <label className="label">
      {placeholder} 
      {required && <span className="input-required">*</span> }
      <div>
        <input 
          className={classes} 
          type= {type} 
          placeholder={placeholder} 
          required={required} 
          {...rest} 
        />
      </div>
    </label>
  );
}
import React from "react";
import "../UIKit/css/Pages.css";

export default function About(props) {
  return <div className="about-layout">
    <div>
      <h1>About Us</h1>
      <p>
        We started operations in 2020. We guarantee fresh produce.<br />
        Save time by shopping on our app and we'll deliver the products right to your home. <br />
      </p>
    </div>
    <img 
      src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_550/v1607770215/react-tutorial/supermarket/about.jpg" 
      width="350" 
      height="240" 
      className="rounded" 
      alt="" 
    />
  </div>;
}
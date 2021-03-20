import React from "react";
import cartImg from "./img/cart.png";

const Navbar = (props) => {
  console.log("RENDER NAVBAR");
  return (
    <nav>
      <span className="total-cost">Total: Rs {props.itemTotalCost}</span>
      <div className="cart-total">
        <img className="cart-icon" src={cartImg} alt="cart-icon" />
        <p className="total-cart-items">{props.itemCount}</p>
      </div>
    </nav>
  );
};

export default Navbar;

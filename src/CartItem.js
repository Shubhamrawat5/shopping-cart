import React from "react";
import minusImg from "./img/minus.svg";
import addImg from "./img/add.svg";
import deleteImg from "./img/delete.svg";

const CartItem = (props) => {
  //props.product have all the info about item
  const { title, price, qty, img } = props.product;
  console.log("RENDER CART-ITEM");

  return (
    <li className="cart-item">
      <div className="cart-item-img-box">
        <img alt="item-img" className="cart-img" src={img}></img>
      </div>
      <div className="cart-item-details-box">
        <h2 className="cart-item-name">{title}</h2>
        <p className="cart-item-price">Rs {price}</p>
        <p className="cart-item-qty">Qty: {qty}</p>
        <div className="btns">
          {/* onClick call the function when button is pressed,below onClick call a arrow function which call handleAddQty() function */}
          <button onClick={() => props.handleAddQty(props.product)}>
            <img alt="add" className="action-btn-img" src={addImg} />
          </button>

          <button onClick={() => props.handleMinusQty(props.product)}>
            <img alt="minus" className="action-btn-img" src={minusImg} />
          </button>

          <button
            className="delete-btn"
            onClick={() => props.handleDeleteProduct(props.product)}
          >
            <img alt="delete" className="action-btn-img" src={deleteImg} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

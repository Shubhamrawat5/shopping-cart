import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  console.log("RENDER CART");
  const products = props.products;
  console.log(products);
  return (
    <ul className="cart">
      {/* to call CartItem for all the item inside products array */}
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.key}
            handleAddQty={props.handleAddQty}
            handleMinusQty={props.handleMinusQty}
            handleDeleteProduct={props.handleDeleteProduct}
          />
        );
      })}
    </ul>
  );
};

export default Cart;

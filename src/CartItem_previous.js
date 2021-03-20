import React from "react";

// testing = () => {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });

//   myPromise.then(() => {
//     // console.log("THEN START");
//     console.log(this.state.qty);
//     this.setState({
//       qty: this.state.qty + 1,
//     });

//     // console.log("THEN MID");
//     console.log(this.state.qty);
//     this.setState({
//       qty: this.state.qty + 1,
//     });
//     // console.log("THEN END");
//     console.log(this.state.qty);
//   });
// };
// console.log("START");
// this.setState((prevState) => {
//   return {
//     qty: prevState.qty + 1,
//   };
// });
// console.log("MID");
// this.setState((prevState) => {
//   return {
//     qty: prevState.qty + 1,
//   };
// });
// console.log("MID2");
// this.setState((prevState) => {
//   return {
//     qty: prevState.qty + 1,
//   };
// });
class CartItem extends React.Component {
  render() {
    const { title, price, qty, img } = this.props.product;
    console.log("RENDER CART-ITEM");
    return (
      <div className="cart-item">
        <div className="cart-item-img-box">
          <img alt="item-img" className="cart-img" src={img}></img>
        </div>
        <div className="cart-item-details-box">
          <h2 className="cart-item-name">{title}</h2>
          <p className="cart-item-price">Rs {price}</p>
          <p className="cart-item-qty">Qty: {qty}</p>
          <div class="btns">
            <button onClick={() => this.props.handleAddQty(this.props.product)}>
              <img
                alt="add"
                className="action-btn-img"
                src="https://www.flaticon.com/svg/vstatic/svg/748/748113.svg?token=exp=1615811643~hmac=933e8a995dfe619b32ca75be75e82534"
              />
            </button>
            <button
              onClick={() => this.props.handleMinusQty(this.props.product)}
            >
              <img
                alt="minus"
                className="action-btn-img"
                src="https://www.flaticon.com/svg/vstatic/svg/748/748114.svg?token=exp=1615811658~hmac=5bbfe3bd8ca19be68cff21401f37ba7f"
              />
            </button>
            <button
              className="delete-btn"
              onClick={() => this.props.handleDeleteProduct(this.props.product)}
            >
              <img
                alt="delete"
                className="action-btn-img"
                src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1615838111~hmac=a9d657ab8376bb5c3bba4bdb10ee5f4d"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;

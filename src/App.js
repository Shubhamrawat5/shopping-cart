import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    //super() to call base class constructor
    super();
    //state to hold the cartItem details, array of objects
    this.state = {
      products: [
        {
          title: "OPPO PHONE",
          price: 5999,
          qty: 5,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6jpi6ccm03mAmnrMxnzC3nqr3qlbL4O4WQ&usqp=CAU",
          key: 1,
        },
        {
          title: "WATCH",
          price: 499,
          qty: 3,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/81BDpSIwu3L._UL1500_.jpg",
          key: 2,
        },
        {
          title: "LAPTOP",
          price: 30000,
          qty: 1,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
          key: 3,
        },
      ],
    };
  }

  handleAddQty = (product) => {
    // console.log(product);
    let products = this.state.products;
    const pos = products.indexOf(product);

    if (products[pos].qty >= 20) return; //20 max limit
    products[pos].qty += 1;

    //update state
    this.setState({
      products: products,
    });
  };

  handleMinusQty = (product) => {
    let products = this.state.products;
    const pos = products.indexOf(product);

    if (products[pos].qty <= 0) return; //min 0 limit
    products[pos].qty -= 1;
    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (product) => {
    //filter the deleted product
    let updatedProducts = this.state.products.filter((items) => {
      return items !== product;
    });

    this.setState({
      products: updatedProducts,
    });
  };

  //total item count in cart
  getItemCount() {
    let count = 0;
    this.state.products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  //total price of all the items in cart
  getItemTotalCost() {
    let total = 0;
    this.state.products.forEach((product) => {
      total += product.qty * product.price;
    });
    return total;
  }

  render() {
    console.log("RENDER APP");
    let products = this.state.products;
    return (
      // fragment to have multiple element
      <React.Fragment>
        <Navbar
          itemTotalCost={this.getItemTotalCost()}
          itemCount={this.getItemCount()}
        />
        <Cart
          products={products}
          handleAddQty={this.handleAddQty}
          handleMinusQty={this.handleMinusQty}
          handleDeleteProduct={this.handleDeleteProduct}
        />
      </React.Fragment>
    );
  }
}

export default App;

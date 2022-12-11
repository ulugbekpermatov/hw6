import React from "react";
import { connect } from "react-redux";
import { bookAddToCart, bookRemoveFromCart,bookDeleteFromCart} from "../../redux-act";
import LoaderIndicator from "../LoaderIndicator";

import classes from "./styles.module.scss";

const ShopCartTable = ({cartItems, addBook,removeBook,deleteBook}) => {
  const renderItems = (item, idx) => {
    const { title, id, count, total } = item;

    return (
      <tr key={`cart-items${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <button
            className="btn btn-outline-success btn-sm"
            onClick={() => addBook(id)}
          >
            <i className="fa-solid fa-circle-plus"></i>
          </button>

          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => removeBook(id)}
          >
            <i className="fa-solid fa-circle-minus"></i>
          </button>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => deleteBook(id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className={classes.cart_table}>
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <td>№</td>
            <td>Item</td>
            <td>Count</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{cartItems.map(renderItems)}</tbody>
      </table>
      <div className={classes.cart_table_total}>TOTAL: 300$</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems,
  };
};

const mapDispatchToProps = {
    addBook: (id) => bookAddToCart(id),
    removeBook: (id) => bookRemoveFromCart(id),
    deleteBook: (id) => bookDeleteFromCart(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartTable);
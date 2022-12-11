import React from "react";

import classes from "./styles.module.scss"

const BookListItem = ({ book, addToCart }) => {
  const { imgUrl, id, title, price, author } = book;
  return (
    <div className={classes.book_list_item}>
        <div className={classes.book_list_item_cover}>
            <img src={imgUrl} alt="book-image" />
        </div>
        <div className={classes.book_list_item_details}>
            <span className={classes.book_list_item__title}>{title}</span>
            <div>{author}</div>
            <div className={classes.book_list_item_price}>{price}$</div>
            <button className="btn btn-info" onClick={() => addToCart(id)}>
                Add to cart
            </button>
        </div>
    </div>
  );
};

export default BookListItem;
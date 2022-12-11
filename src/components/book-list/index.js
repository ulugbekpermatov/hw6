import React, { useEffect } from "react";
import { connect } from "react-redux";

import { WithService } from "../hoc-helpers";
import { BookListItem } from "../";
import { bookAddToCart, booksLoaded, fetchBooks } from "../../redux-act";
import LoaderIndicator from "../LoaderIndicator";
import "./styles.module.scss";

const BookList = ({ books, loading, errorIndicator, fetchData, addToCart }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {loading ?
       (<LoaderIndicator/>)
       : errorIndicator ? (
        errorIndicator
      ) : (
        books.map((el) => (
          <li key={`book-${el.id}`}>
            <BookListItem book={el} addToCart={addToCart} />
          </li>
        ))
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    errorIndicator: state.error,
  };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    fetchData: () => fetchBooks(storeService, dispatch),
    addToCart: (id) => dispatch(bookAddToCart(id))
  };
};

export default WithService(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
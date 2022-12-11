import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, FETCH_BOOKS_LOADING,REQUEST, ADDED_TO_CART, REMOVE_FROM_CART, DELETE_TO_CART} from "../types";

export const booksLoaded = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

export const bookLoading = (isLoading) => {
  return{
    type: FETCH_BOOKS_LOADING,
    payload: isLoading,
  };
};

export const bookError = (err) => {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: err
  };
};


export const bookRequest = () => {
  return {
    type: REQUEST,
  };
};


export const fetchBooks = (storeService, dispatch) => {
  dispatch(bookRequest());
  dispatch(bookLoading(true));
  storeService
  .getBooks()
  .then((data) => dispatch(booksLoaded(data)))
  .catch((err) => dispatch(bookError(err.massage)))
  .finally(() => dispatch(bookLoading(false)))
}


export const bookAddToCart = (id) => {
return{
  type: ADDED_TO_CART,
  payload: id,
}
}

export const bookRemoveFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const bookDeleteFromCart = (id) => {
  return {
    type: DELETE_TO_CART,
    payload: id,
  }
}

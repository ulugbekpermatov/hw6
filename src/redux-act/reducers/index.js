import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_LOADING,
  REQUEST,
  ADDED_TO_CART,
  REMOVE_FROM_CART,
  DELETE_TO_CART,
} from "../types";

const initialState = {
  books: [],
  loading: false,
  error: null,
  cartItems: [],
};

const CreateItem = (book, cartBook = {}, quantity) => {
  const { title = book.title, id = book.id, count = 0, total = 0 } = cartBook;
  return{
    title,
    id,
    count:count + quantity,
    total: total + book.price * quantity,
  };
};

const updateCartItems = (cartItems, idx, item) => {
  if(item.count <= 0) {
    return cartItems.filter(({id}) => id !== item.id)
  }

  if(idx > -1) {
    return [ ...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)]
  }

  return [...cartItems,item];
}

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  const book = books.find(({ id }) => bookId === id);
  const cartItemIdx = cartItems.findIndex(({ id }) => id === bookId);
  const cartBook = cartItems.find(({id}) => id === bookId);

  const newItem = CreateItem(book, cartBook, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, cartItemIdx, newItem)
};
};

const reducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: payload,
      };

    case FETCH_BOOKS_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        error: payload,
      };
    case REQUEST:
      return {
        ...state,
        books: [],
        loading: false,
        error: null,
      };

    case ADDED_TO_CART:
    return updateOrder(state, payload, +1)

    case REMOVE_FROM_CART:
      return updateOrder(state, payload,-1);

      case DELETE_TO_CART:
        const { cartItems } = state;
        const itemCount = cartItems.find(({ id }) => id === payload).count;

        return updateOrder(state, payload, -itemCount);

    default:
      return state;
  }
};

export default reducers;
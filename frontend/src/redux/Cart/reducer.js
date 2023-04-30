import {
  DELCARTREQ,
  DELWISHLISTREQ,
  EMPTYCARTREQ,
  GETCARTREQ,
  GETWISHLISTREQ,
  POSTCARTREQ,
  POSTWISHLISTREQ,
} from "./action.Type";

const initialState = {
  loading: false,
  error: false,
  cart: [],
  wishlist: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POSTCARTREQ:
      return { ...state, cart: [...state.cart, payload] };
    case POSTWISHLISTREQ:
      return { ...state, wishlist: [...state.wishlist, payload] };
    case GETCARTREQ:
      return { ...state, cart: payload };
    case DELCARTREQ:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== payload._id),
      };
      case DELWISHLISTREQ:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item._id !== payload._id),
      };
    case GETWISHLISTREQ:
      return { ...state, wishlist: payload };
    case EMPTYCARTREQ:
      return { ...state, cart: []};

    default:
      return state;
  }
};

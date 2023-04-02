import { GETCARTREQ, POSTCARTREQ, POSTWISHLISTREQ } from "./action.Type";

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

    default:
      return state;
  }
};



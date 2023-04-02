import {
  GETCARTREQ,
  GETREQ,
  GETSINGLEPROD,
  POSTCARTREQ,
  POSTWISHLISTREQ,
} from "./action.Type";

const initialState = {
  loading: false,
  error: false,
  storeData: [],
  singleProd: {},
  cart: [],
  wishlist: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETREQ:
      return { ...state, storeData: payload };
    case GETSINGLEPROD:
      return { ...state, singleProd: payload };
    case POSTCARTREQ:
      return { ...state, cart: [...state.cart, payload] };
    case POSTWISHLISTREQ:
      return { ...state, wishlist: [...state.wishlist, payload] };
    case GETCARTREQ:
      return { ...state, cart:payload };

    default:
      return state;
  }
};

export default reducer;

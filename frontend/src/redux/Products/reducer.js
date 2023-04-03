import { GETREQ, GETSINGLEPROD } from "./action.Type";

const initialState = {
  loading: false,
  error: false,
  Products: [],
  SingleProduct:{}
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETREQ:
      return { ...state, Products: payload };
      case GETSINGLEPROD:
        return { ...state, SingleProduct: payload };
    default:
      return state;
  }
};



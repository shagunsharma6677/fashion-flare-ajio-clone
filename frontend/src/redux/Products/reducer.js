import { GETREQ } from "./action.Type";

const initialState = {
  loading: false,
  error: false,
  Products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETREQ:
      return { ...state, Products: payload };
    default:
      return state;
  }
};



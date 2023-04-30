import { GETREQ,GETSINGLEPROD , PATCHSINGLEPROD,DELETESINGLEPROD,  POSTREQ} from "./action.Type";

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
        case POSTREQ:
          return { ...state, Products: [...state.Products, payload] };
          case PATCHSINGLEPROD:
            return {
              ...state,
              SingleProduct: { ...state.SingleProduct, ...payload },
            };
          case DELETESINGLEPROD:
            return { ...state, SingleProduct: {} };
    default:
      return state;
  }
};



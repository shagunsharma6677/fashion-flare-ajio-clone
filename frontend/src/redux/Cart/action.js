import axios from "axios";
import { GETCARTREQ, POSTCARTREQ, POSTWISHLISTREQ } from "./action.Type";

const postCart = (payload) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://magnificent-bass-suit.cyclic.app/cart",
      payload
    );
    const res = await response.data;
    dispatch({ type: POSTCARTREQ, payload: res });
  } catch (err) {
    console.log(err);
  }
};

const getCartData = (payload) => (dispatch) => {
  dispatch({ type: GETCARTREQ, payload });
};

const postWishlist = (payload) => async (dispatch) => {
  dispatch({ type: POSTWISHLISTREQ, payload });
};

export { postCart, postWishlist, getCartData };

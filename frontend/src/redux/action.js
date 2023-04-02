import axios from "axios";
import {
  GETCARTREQ,
  GETREQ,
  GETSINGLEPROD,
  POSTCARTREQ,
  POSTWISHLISTREQ,
} from "./action.Type";

const getReduxData = (mensNew) => async (dispatch) => {
  const response = await axios.get(`https://magnificent-bass-suit.cyclic.app/${mensNew}`);
  const res = await response.data;
  dispatch({ type: GETREQ, payload: res });
};

const getSingleProd = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`https://magnificent-bass-suit.cyclic.app/mens/${id}`);
    const res = await response.data;
    dispatch({ type: GETSINGLEPROD, payload: res });
  } catch (err) {
    console.log(err);
  }
};

const postCart = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("https://magnificent-bass-suit.cyclic.app/cart", payload);
    const res = await response.data;
    dispatch({ type: POSTCARTREQ, payload: res });
  } catch (err) {
    console.log(err);
  }
};

// const postWishlist = (payload) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:8080/wishlist",
//       payload
//     );
//     const res = await response.data;
//     dispatch({ type: POSTWISHLISTREQ, payload: res });
//   } catch (err) {
//     console.log(err);
//   }
// };

const getCartData = (payload) => (dispatch) => {
  dispatch({ type: GETCARTREQ, payload });
};

const postWishlist = (payload) => async (dispatch) => {
  dispatch({ type: POSTWISHLISTREQ, payload });
};



export { getReduxData, getSingleProd, postCart, postWishlist, getCartData };

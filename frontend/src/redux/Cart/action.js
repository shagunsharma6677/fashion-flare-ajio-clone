import axios from "axios";
import { GETCARTREQ, POSTCARTREQ, POSTWISHLISTREQ } from "./action.Type";

const addToCart = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:4000/cart/add", payload);
    
    dispatch({ type: POSTCARTREQ, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getCartData = () =>async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/cart/");
    
    dispatch({ type: GETCARTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

const addToWishlist = (payload) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:4000/wishlist/add", payload);
    
    dispatch({ type: POSTWISHLISTREQ, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export { addToCart,addToWishlist, getCartData };

import axios from "axios";
import { DELCARTREQ, DELWISHLISTREQ, EMPTYCARTREQ, GETCARTREQ, GETWISHLISTREQ, POSTCARTREQ, POSTWISHLISTREQ } from "./action.Type";
// https://style-savvy-backend.onrender.com
const addToCart = (ProductDetail) => async (dispatch) => {
  const {_id,...payload} = ProductDetail

  try {
    const response = await axios.post("https://style-savvy-backend.onrender.com/cart/add", ProductDetail);
    // console.log("inside redux addtocart",response)
    
    dispatch({ type: POSTCARTREQ, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};


const getCartData = () =>async (dispatch) => {
  try {
    const response = await axios.get("https://style-savvy-backend.onrender.com/cart/");
    // console.log("inside redux",response.data)
    
    dispatch({ type: GETCARTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

const deleteCartData = (id) =>async (dispatch) => {
  console.log(id)
  try {
    const response = await axios.delete(`https://style-savvy-backend.onrender.com/cart/delete/${id}`);
    // console.log("inside del",response.data)
    
    dispatch({ type: DELCARTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

const deleteWishlistData = (id) =>async (dispatch) => {
  console.log(id)
  try {
    const response = await axios.delete(`https://style-savvy-backend.onrender.com/wishlist/delete/${id}`);
    // console.log("inside del",response.data)
    
    dispatch({ type: DELWISHLISTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

const emptyCartData = () =>async (dispatch) => {
  
  try {
    const response = await axios.delete(`https://style-savvy-backend.onrender.com/cart/empty`);
    // console.log("inside del",response.data)
    
    dispatch({ type: EMPTYCARTREQ, payload:[] });
  } catch (err) {
    console.log(err);
  }
  
};

const addToWishlist = (ProductDetail) => async (dispatch) => {
  const {_id,...payload} = ProductDetail
  try {
    const response = await axios.post("https://style-savvy-backend.onrender.com/wishlist/add", payload);
    // console.log("inside wishlist",response.data)
    dispatch({ type: POSTWISHLISTREQ, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getWishlistData = () =>async (dispatch) => {
  try {
    const response = await axios.get("https://style-savvy-backend.onrender.com/wishlist/");
    // console.log("inside redux",response.data)
    
    dispatch({ type: GETWISHLISTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

export { addToCart,addToWishlist,deleteWishlistData,deleteCartData, getCartData,emptyCartData ,getWishlistData};

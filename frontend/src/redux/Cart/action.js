import axios from "axios";
import { DELCARTREQ, DELWISHLISTREQ, EMPTYCARTREQ, GETCARTREQ, GETWISHLISTREQ, POSTCARTREQ, POSTWISHLISTREQ } from "./action.Type";
// https://witty-foal-undershirt.cyclic.app/product/men
const addToCart = (ProductDetail) => async (dispatch) => {
  const {_id,...payload} = ProductDetail

  try {
    const response = await axios.post("https://witty-foal-undershirt.cyclic.app/cart/add", ProductDetail);
    // console.log("inside redux addtocart",response)
    
    dispatch({ type: POSTCARTREQ, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getCartData = () =>async (dispatch) => {
  try {
    const response = await axios.get("https://witty-foal-undershirt.cyclic.app/cart/");
    // console.log("inside redux",response.data)
    
    dispatch({ type: GETCARTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

const deleteCartData = (id) =>async (dispatch) => {
  console.log(id)
  try {
    const response = await axios.delete(`https://witty-foal-undershirt.cyclic.app/cart/delete/${id}`);
    // console.log("inside del",response.data)
    
    dispatch({ type: DELCARTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

const deleteWishlistData = (id) =>async (dispatch) => {
  console.log(id)
  try {
    const response = await axios.delete(`https://witty-foal-undershirt.cyclic.app/wishlist/delete/${id}`);
    // console.log("inside del",response.data)
    
    dispatch({ type: DELWISHLISTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

const emptyCartData = () =>async (dispatch) => {
  
  try {
    const response = await axios.delete(`https://witty-foal-undershirt.cyclic.app/cart/empty`);
    // console.log("inside del",response.data)
    
    dispatch({ type: EMPTYCARTREQ, payload:[] });
  } catch (err) {
    console.log(err);
  }
  
};

const addToWishlist = (ProductDetail) => async (dispatch) => {
  const {_id,...payload} = ProductDetail
  try {
    const response = await axios.post("https://witty-foal-undershirt.cyclic.app/wishlist/add", payload);
    // console.log("inside wishlist",response.data)
    dispatch({ type: POSTWISHLISTREQ, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const getWishlistData = () =>async (dispatch) => {
  try {
    const response = await axios.get("https://witty-foal-undershirt.cyclic.app/wishlist/");
    // console.log("inside redux",response.data)
    
    dispatch({ type: GETWISHLISTREQ, payload:response.data });
  } catch (err) {
    console.log(err);
  }
  
};

export { addToCart,addToWishlist,deleteWishlistData,deleteCartData, getCartData,emptyCartData ,getWishlistData};

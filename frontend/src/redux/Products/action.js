import axios from "axios";
import { GETREQ,GETSINGLEPROD } from "./action.Type";

const getProductData = (category) => async (dispatch) => {
  const response = await axios.get(`http://localhost:4000/product/${category}`);
  const res = await response.data;
  dispatch({ type: GETREQ, payload: res });
};
const getSingleData = (category,id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:4000/product/${category}/${id}`);
  const res = await response.data;
  // console.log("redux",res)
  dispatch({ type: GETSINGLEPROD, payload: res });
};


export { getProductData ,getSingleData};

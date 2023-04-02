import axios from "axios";
import { GETREQ } from "./action.Type";

const getProductData = (category) => async (dispatch) => {
  const response = await axios.get(`http://localhost:4000/product/${category}`);
  const res = await response.data;
  dispatch({ type: GETREQ, payload: res });
};

export { getProductData };

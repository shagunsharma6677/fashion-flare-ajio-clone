import {
    GET_REQUEST_ADMIN_SIDE,
    GET_REQUEST_FAILURE_ADMIN_SIDE,
    GET_REQUEST_SUCCESS_ADMIN_SIDE,
    PATCH_REQUEST_ADMIN_SIDE,
    PATCH_REQUEST_FAILURE_ADMIN_SIDE,
    PATCH_REQUEST_SUCCESS_ADMIN_SIDE,
  } from "./action.Type";
  
  const initialState = {
    isLoading: false,
    isError: false,
    mens: [],
    womens: [],
    kids: [],
  };
  export const reducer = (state = initialState, action) => {
    const { type, payload, category } = action;
    switch (type) {
      case GET_REQUEST_ADMIN_SIDE: {
        // console.log("GET_REQUEST_ADMIN_SIDE");
        return {
          ...state,
          isLoading: true,
        };
      }
  
      case GET_REQUEST_SUCCESS_ADMIN_SIDE: {
        //   console.log(category);
  
        if (category === "men") {
          return {
            ...state,
            isLoading: false,
            mens: payload,
          };
        }
  
        if (category === "women") {
          return {
            ...state,
            isLoading: false,
            womens: payload,
          };
        }
  
        if (category === "kid") {
          return {
            ...state,
            isLoading: false,
            kids: payload,
          };
        }
      }
      case GET_REQUEST_FAILURE_ADMIN_SIDE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      case PATCH_REQUEST_ADMIN_SIDE: {
        return {
          ...state,
          isLoading: true,
        };
      }
  
      case PATCH_REQUEST_SUCCESS_ADMIN_SIDE: {
        return {
          ...state,
          isLoading: false,
        };
      }
  
      case PATCH_REQUEST_FAILURE_ADMIN_SIDE: {
        return {
          ...state,
          isError: true,
        };
      }
      default:
        return state;
    }
  };
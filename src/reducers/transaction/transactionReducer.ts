import {
    GET_TRANSACTION_REQUEST,
    GET_TRANSACTION_SUCCESS,
    GET_TRANSACTION_FAILURE,
  } from "./actionTypes";
  
  import { TransactionActions, TransactionState } from "./types";
  
  const initialState: TransactionState = {
    loading: true,
    pending: false,
    pool: [],
    error: "",
  };

  
  const reducers = (state = initialState, action: TransactionActions): TransactionState => {
    switch (action.type) {
      case GET_TRANSACTION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_TRANSACTION_FAILURE:
        return {
          ...state,
          loading: false,
          pending: false,
          error: action.payload.error,
        };
  
      case GET_TRANSACTION_SUCCESS:
        console.log("action.payload.pool", action.payload)
        return {
          ...state,
          loading: false,
          pool: [...state.pool, ...action.payload.pool],
          error: "",
        };
  
      default:
        return {
          ...state,
          pool: [
            ...state.pool
          ]
        };
    }
  };
  
  export default reducers;
import {
    GET_TRANSACTION_REQUEST,
    GET_TRANSACTION_SUCCESS,
    GET_TRANSACTION_FAILURE,
    SEND_COIN_REQUEST,
    SEND_COIN_SUCCESS,
    SEND_COIN_FAILURE,
  } from "./actionTypes";
  
  import { TransactionActions, TransactionState } from "./types";
  
  const initialState: TransactionState = {
    loading: true,
    pending: false,
    pool: [],
    error: "",
    recent: null,
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
          pool: [...action.payload.pool],
          error: "",
        };
  
      case SEND_COIN_REQUEST:
        return {
          ...state,
          recent: null,
        };
      case SEND_COIN_FAILURE:
        return {
          ...state,
          recent: null,
          error: action.payload.error,
        };
  
      case SEND_COIN_SUCCESS:
        console.log("action.payload.pool", action.payload)
        return {
          ...state,
          recent: {...state.recent, ...action.payload.recent},
          pool: [...state.pool],
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
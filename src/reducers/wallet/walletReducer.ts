import {
    GET_WALLET_REQUEST,
    GET_WALLET_SUCCESS,
    GET_WALLET_FAILURE,
  } from "./actionTypes";
  
  import { WalletActions, WalletState } from "./types";
  
  const initialState: WalletState = {
    details: {
      address: "",
      private_key: "",
      public_key: "",
      balance: 0,
    },
    loading: true,
    pending: false,
    error: "",
  };

  
  const reducers = (state = initialState, action: WalletActions): WalletState => {
    switch (action.type) {
      case GET_WALLET_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case GET_WALLET_FAILURE:
        return {
          ...state,
          loading: true,
          pending: false,
          error: action.payload.error,
        };
  
      case GET_WALLET_SUCCESS:
        console.log("action.payload.chain", action.payload)
        return {
          ...state,
          loading: false,
          pending: false,
          details: {...state.details, ...action.payload.details},
          error: "",
        };
  
      default:
        return {
          ...state,
          details: {...state.details}
        };
    }
  };
  
  export default reducers;
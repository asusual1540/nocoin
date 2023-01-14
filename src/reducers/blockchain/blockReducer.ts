import {
    GET_BLOCKCHAIN_REQUEST,
    GET_BLOCKCHAIN_SUCCESS,
    GET_BLOCKCHAIN_FAILURE,
  } from "./actionTypes";
  
  import { BlockchainActions, BlockchainState } from "./types";
  
  const initialState: BlockchainState = {
    loading: false,
    chain: [],
    error: ""
  };

  
  const reducers = (state = initialState, action: BlockchainActions) => {
    switch (action.type) {
      case GET_BLOCKCHAIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_BLOCKCHAIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
  
      case GET_BLOCKCHAIN_SUCCESS:
        console.log("action.payload.chain", action.payload)
        return {
          ...state,
          loading: false,
          chain: [...state.chain, ...action.payload.chain],
          error: null,
        };
  
      default:
        return {
          ...state,
        };
    }
  };
  
  export default reducers;
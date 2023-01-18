import {
    GET_PUZZLE_REQUEST,
    GET_PUZZLE_SUCCESS,
    GET_PUZZLE_FAILURE,
  } from "./actionTypes";
  
  import { PuzzleActions, PuzzleState } from "./types";
  
  const initialState: PuzzleState = {
    loading: true,
    pending: false,
    pool: [],
    error: ""
  };

  
  const reducers = (state = initialState, action: PuzzleActions) : PuzzleState => {
    switch (action.type) {
      case GET_PUZZLE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_PUZZLE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
  
      case GET_PUZZLE_SUCCESS:
        console.log("action.payload.pool", action.payload)
        return {
          ...state,
          loading: false,
          pool: [...state.pool, ...action.payload.pool],
          error: null,
        };
  
      default:
        return {
          ...state,
        };
    }
  };
  
  export default reducers;
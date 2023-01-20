import {
    GET_PUZZLE_REQUEST,
    GET_PUZZLE_SUCCESS,
    GET_PUZZLE_FAILURE,
    CREATE_PUZZLE_REQUEST,
    CREATE_PUZZLE_SUCCESS,
    CREATE_PUZZLE_FAILURE,
    RESET_RECENT_PUZZLE,
    SOLVE_PUZZLE_REQUEST,
    SOLVE_PUZZLE_SUCCESS,
    SOLVE_PUZZLE_FAILURE,
    SELECT_PUZZLE
  } from "./actionTypes";
  
  import { PuzzleActions, PuzzleState } from "./types";
  
  const initialState: PuzzleState = {
    loading: true,
    pending: false,
    pool: [],
    error: "",
    recent: null,
    current: null,
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
          pool: [...action.payload.pool],
          error: null,
        };
      case RESET_RECENT_PUZZLE:
        return {
          ...state,
          recent: null,
        };
      case CREATE_PUZZLE_REQUEST:
        return {
          ...state,
          recent: null,
        };
      case CREATE_PUZZLE_FAILURE:
        return {
          ...state,
          recent: null,
          error: action.payload.error,
        };
  
      case CREATE_PUZZLE_SUCCESS:
        console.log("action.payload.pool", action.payload)
        return {
          ...state,
          recent: {...action.payload.puzzle},
          pool: [...state.pool],
          error: null,
        };
      case SOLVE_PUZZLE_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case SOLVE_PUZZLE_FAILURE:
        return {
          ...state,
          pending: false,
          error: action.payload.error,
        };
  
      case SOLVE_PUZZLE_SUCCESS:
        console.log("action.payload.pool", action.payload)
        return {
          ...state,
          pending: false,
          pool: [...state.pool],
          error: null,
        };

      case SELECT_PUZZLE:
        return {
          ...state,
          pool: [...state.pool],
          current: {...state.current, ...action.payload.puzzle}
        };
  
      default:
        return {
          ...state,
        };
    }
  };
  
  export default reducers;
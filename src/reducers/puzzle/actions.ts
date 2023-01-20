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
    SELECT_PUZZLE,
  } from "./actionTypes";


  import {
    SelectPuzzle,
    SelectPuzzlePayload,
    GetPuzzleRequest,
    GetPuzzleSuccess,
    GetPuzzleSuccessPayload,
    GetPuzzleFailure,
    GetPuzzleFailurePayload,
    CreatePuzzleRequest,
    CreatePuzzleRequestPayload,
    CreatePuzzleSuccess,
    CreatePuzzleSuccessPayload,
    CreatePuzzleFailure,
    CreatePuzzleFailurePayload,
    ResetRecentPuzzle,
    SolvePuzzleRequest,
    SolvePuzzleRequestPayload,
    SolvePuzzleSuccess,
    SolvePuzzleSuccessPayload,
    SolvePuzzleFailure,
    SolvePuzzleFailurePayload,
  } from "./types";
  
  export const selectPuzzle = (payload: SelectPuzzlePayload): SelectPuzzle => ({
    type: SELECT_PUZZLE,
    payload
  });
  
  export const resetRecentPuzzle = (): ResetRecentPuzzle => ({
    type: RESET_RECENT_PUZZLE
  });
  
  export const getPuzzleRequest = (): GetPuzzleRequest => ({
    type: GET_PUZZLE_REQUEST
  });
  
  export const getPuzzleSuccess = (payload: GetPuzzleSuccessPayload): GetPuzzleSuccess => ({
    type: GET_PUZZLE_SUCCESS,
    payload,
  });
  
  export const getPuzzleFailure = (payload: GetPuzzleFailurePayload): GetPuzzleFailure => ({
    type: GET_PUZZLE_FAILURE,
    payload,
  });
  
  export const createPuzzleRequest = (payload: CreatePuzzleRequestPayload): CreatePuzzleRequest => ({
    type: CREATE_PUZZLE_REQUEST,
    payload,
  });
  
  export const createPuzzleSuccess = (payload: CreatePuzzleSuccessPayload): CreatePuzzleSuccess => ({
    type: CREATE_PUZZLE_SUCCESS,
    payload,
  });
  
  export const createPuzzleFailure = (payload: CreatePuzzleFailurePayload): CreatePuzzleFailure => ({
    type: CREATE_PUZZLE_FAILURE,
    payload,
  });
  
  
  export const solvePuzzleRequest = (payload: SolvePuzzleRequestPayload): SolvePuzzleRequest => ({
    type: SOLVE_PUZZLE_REQUEST,
    payload,
  });
  
  export const solvePuzzleSuccess = (payload: SolvePuzzleSuccessPayload): SolvePuzzleSuccess => ({
    type: SOLVE_PUZZLE_SUCCESS,
    payload,
  });
  
  export const solvePuzzleFailure = (payload: SolvePuzzleFailurePayload): SolvePuzzleFailure => ({
    type: SOLVE_PUZZLE_FAILURE,
    payload,
  });
  
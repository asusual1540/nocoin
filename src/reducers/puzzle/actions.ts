import {
    GET_PUZZLE_REQUEST,
    GET_PUZZLE_SUCCESS,
    GET_PUZZLE_FAILURE
  } from "./actionTypes";


  import {
    GetPuzzleRequest,
    GetPuzzleSuccess,
    GetPuzzleSuccessPayload,
    GetPuzzleFailure,
    GetPuzzleFailurePayload,
  } from "./types";
  
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
  
import {
    GET_PUZZLE_REQUEST,
    GET_PUZZLE_SUCCESS,
    GET_PUZZLE_FAILURE,
    CREATE_PUZZLE_REQUEST,
    CREATE_PUZZLE_SUCCESS,
    CREATE_PUZZLE_FAILURE,
  } from "./actionTypes";


  import {
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
  
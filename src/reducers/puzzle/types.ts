
import {
    GET_PUZZLE_REQUEST,
    GET_PUZZLE_SUCCESS,
    GET_PUZZLE_FAILURE,
  } from "./actionTypes";
  


export interface Puzzle {
  id: string,
  description: string,
  puzzle_hash: string,
}


export interface PuzzleState {
  loading: boolean;
  pending: boolean;
  pool: Puzzle[];
  error: string | null;
}
  
export interface GetPuzzleRequest {
  type: typeof GET_PUZZLE_REQUEST;
}

export interface GetPuzzleSuccessPayload {
  pool: Puzzle[];
}

export interface GetPuzzleFailurePayload {
  error: string;
}


export type GetPuzzleSuccess = {
  type: typeof GET_PUZZLE_SUCCESS,
  payload: GetPuzzleSuccessPayload,
};

export type GetPuzzleFailure = {
  type: typeof GET_PUZZLE_FAILURE,
  payload: GetPuzzleFailurePayload,
};



export type PuzzleActions =
  | GetPuzzleRequest
  | GetPuzzleSuccess
  | GetPuzzleFailure;
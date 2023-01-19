
import {
    GET_PUZZLE_REQUEST,
    GET_PUZZLE_SUCCESS,
    GET_PUZZLE_FAILURE,
    CREATE_PUZZLE_REQUEST,
    CREATE_PUZZLE_SUCCESS,
    CREATE_PUZZLE_FAILURE,
  } from "./actionTypes";
  
  
export interface Puzzle {
  id: string,
  output: {
      [address: string]: string
  },
  input: {
    address: string;
    description: string,
    hash: string,
    public_key: string,
    timestamp: string,
  }
}


export interface PuzzleState {
  loading: boolean;
  pending: boolean;
  recent: Puzzle | null;
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

export interface CreatePuzzleRequest {
  type: typeof CREATE_PUZZLE_REQUEST;
  payload: CreatePuzzleRequestPayload;
}

export interface CreatePuzzleRequestPayload {
  description: string;
  answer: string;
}



export type GetPuzzleSuccess = {
  type: typeof GET_PUZZLE_SUCCESS,
  payload: GetPuzzleSuccessPayload,
};

export type GetPuzzleFailure = {
  type: typeof GET_PUZZLE_FAILURE,
  payload: GetPuzzleFailurePayload,
};

export interface CreatePuzzleSuccessPayload {
  puzzle: Puzzle;
}

export interface CreatePuzzleFailurePayload {
  error: string;
}

export type CreatePuzzleSuccess = {
  type: typeof CREATE_PUZZLE_SUCCESS,
  payload: CreatePuzzleSuccessPayload,
};

export type CreatePuzzleFailure = {
  type: typeof CREATE_PUZZLE_FAILURE,
  payload: CreatePuzzleFailurePayload,
};



export type PuzzleActions =
  | GetPuzzleRequest
  | GetPuzzleSuccess
  | GetPuzzleFailure
  | CreatePuzzleRequest
  | CreatePuzzleSuccess
  | CreatePuzzleFailure;
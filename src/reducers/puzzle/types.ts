
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
  
  
export interface Puzzle {
  id: string,
  solved: number,
  invalid: number,
  valid: number,
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
  current: Puzzle | null;
  pool: Puzzle[];
  error: string | null;
}
  
export interface SelectPuzzle {
  type: typeof SELECT_PUZZLE;
  payload: SelectPuzzlePayload;
}

export interface GetPuzzleRequest {
  type: typeof GET_PUZZLE_REQUEST;
}

  
export interface ResetRecentPuzzle {
  type: typeof RESET_RECENT_PUZZLE;
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

export interface SelectPuzzlePayload {
  puzzle: Puzzle;
}
export interface SolvePuzzleRequest {
  type: typeof SOLVE_PUZZLE_REQUEST;
  payload: SolvePuzzleRequestPayload;
}

export interface SolvePuzzleRequestPayload {
  puzzle_id: string;
  solution: string;
  invalid: boolean;
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

export interface SolvePuzzleSuccessPayload {
  status: boolean;
}

export interface SolvePuzzleFailurePayload {
  error: string;
}

export type SolvePuzzleSuccess = {
  type: typeof SOLVE_PUZZLE_SUCCESS,
  payload: SolvePuzzleSuccessPayload,
};

export type SolvePuzzleFailure = {
  type: typeof SOLVE_PUZZLE_FAILURE,
  payload: SolvePuzzleFailurePayload,
};



export type PuzzleActions =
  | GetPuzzleRequest
  | GetPuzzleSuccess
  | GetPuzzleFailure
  | CreatePuzzleRequest
  | CreatePuzzleSuccess
  | CreatePuzzleFailure
  | SolvePuzzleRequest
  | SolvePuzzleSuccess
  | SolvePuzzleFailure
  | ResetRecentPuzzle
  | SelectPuzzle;
import { all, call, put, takeLatest } from "redux-saga/effects";
import {server} from "./api"

import {
  getPuzzleSuccess,
  getPuzzleFailure,
  createPuzzleSuccess,
  createPuzzleFailure,
  getPuzzleRequest,
  solvePuzzleSuccess,
  solvePuzzleFailure,
} from "../reducers/puzzle/actions";

import { GET_PUZZLE_REQUEST, CREATE_PUZZLE_REQUEST, SOLVE_PUZZLE_REQUEST } from "../reducers/puzzle/actionTypes";
import { Puzzle, CreatePuzzleRequestPayload, SolvePuzzleRequestPayload } from "../reducers/puzzle/types";




const getPuzzle = async () => {
  const {data} = await server.get('/puzzles')
  console.log("data", data)
  console.log("data", typeof(data))
  
  return {pool: data};
};



function* getPuzzleSaga(action: any) {
  try {
    const response: { pool: Puzzle[] } = yield call(getPuzzle);
    console.log("response.pool", response.pool)
    yield put(
      getPuzzleSuccess({
        pool: response.pool,
      })
    );
    // action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      getPuzzleFailure({
        error: e.message,
      })
    );
  }
}



const createPuzzle = async (payload: CreatePuzzleRequestPayload) => {
  console.log("payload", payload)
  const {data}  = await server.post('/puzzle/create', {description : payload.description, answer: payload.answer})
  console.log("data", data)
  console.log("data", typeof(data))
  
  return {data: data};
};



function* createPuzzleSaga(action: any) {
  try {
    const response: { data: Puzzle } = yield call(createPuzzle, {
      description : action.payload.description, answer: action.payload.answer
    });
    console.log("response.pool", response.data)
    yield put(
      createPuzzleSuccess({
        puzzle: response.data
      })
    );
    yield put(
      getPuzzleRequest()
    );
    
    // action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      createPuzzleFailure({
        error: e.message,
      })
    );
  }
}

const solvePuzzle = async (payload: SolvePuzzleRequestPayload) => {
  console.log("payload", payload)
  const {data}  = await server.post('/puzzle/solve', {puzzle_id : payload.puzzle_id, invalid: payload.invalid, solution: payload.solution})
  console.log("data", data)
  console.log("data", typeof(data))
  
  return {data: data};
};



function* solvePuzzleSaga(action: any) {
  try {
    const response: { data: boolean } = yield call(solvePuzzle, {
      puzzle_id : action.payload.puzzle_id, invalid: action.payload.invalid, solution: action.payload.solution
    });
    console.log("response.pool", response.data)
    yield put(
      solvePuzzleSuccess({
        status: response.data
      })
    );
    yield put(
      getPuzzleRequest()
    );
    
    // action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      solvePuzzleFailure({
        error: e.message,
      })
    );
  }
}



function* puzzleSaga() {
  yield all([takeLatest(GET_PUZZLE_REQUEST, getPuzzleSaga)]);
  yield all([takeLatest(CREATE_PUZZLE_REQUEST, createPuzzleSaga)]);
  yield all([takeLatest(SOLVE_PUZZLE_REQUEST, solvePuzzleSaga)]);
}

export default puzzleSaga;
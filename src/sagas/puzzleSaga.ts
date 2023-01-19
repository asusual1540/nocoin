import { all, call, put, takeLatest } from "redux-saga/effects";
import {server} from "./api"

import {
  getPuzzleSuccess,
  getPuzzleFailure,
  createPuzzleSuccess,
  createPuzzleFailure,
} from "../reducers/puzzle/actions";

import { GET_PUZZLE_REQUEST, CREATE_PUZZLE_REQUEST } from "../reducers/puzzle/actionTypes";
import { Puzzle, CreatePuzzleRequestPayload } from "../reducers/puzzle/types";




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
    // action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      createPuzzleFailure({
        error: e.message,
      })
    );
  }
}



function* puzzleSaga() {
  yield all([takeLatest(GET_PUZZLE_REQUEST, getPuzzleSaga)]);
  yield all([takeLatest(CREATE_PUZZLE_REQUEST, createPuzzleSaga)]);
}

export default puzzleSaga;
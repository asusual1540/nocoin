import { all, call, put, takeLatest } from "redux-saga/effects";
import {server} from "./api"

import {
  getPuzzleSuccess,
  getPuzzleFailure,
} from "../reducers/puzzle/actions";

import { GET_PUZZLE_REQUEST } from "../reducers/puzzle/actionTypes";
import { Puzzle } from "../reducers/puzzle/types";




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


function* puzzleSaga() {
  yield all([takeLatest(GET_PUZZLE_REQUEST, getPuzzleSaga)]);
}

export default puzzleSaga;
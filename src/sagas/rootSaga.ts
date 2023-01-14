import { all, fork } from "redux-saga/effects";

import blockSaga from "./blockSaga";

export default function* rootSaga() {
  yield all([fork(blockSaga)]);
}
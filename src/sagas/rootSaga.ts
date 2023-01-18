import { all, fork } from "redux-saga/effects";

import blockSaga from "./blockSaga";
import puzzleSaga from "./puzzleSaga";
import transactionSaga from "./transactionSaga";
import walletSaga from "./walletSaga";

export default function* rootSaga() {
  yield all([fork(blockSaga)]);
  yield all([fork(puzzleSaga)]);
  yield all([fork(transactionSaga)]);
  yield all([fork(walletSaga)]);
}
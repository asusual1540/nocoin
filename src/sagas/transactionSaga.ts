import { all, call, put, takeLatest } from "redux-saga/effects";
import {server} from "./api"

import {
  getTransactionSuccess,
  getTransactionFailure,
} from "../reducers/transaction/actions";

import { GET_TRANSACTION_REQUEST } from "../reducers/transaction/actionTypes";
import { Transaction } from "../reducers/transaction/types";




const getTransaction = async () => {
  const {data}  = await server.get('/transactions')
  console.log("data", data)
  console.log("data", typeof(data))
  
  return {pool: data};
};



function* getTransactionSaga(action: any) {
  try {
    const response: { pool: Transaction[] } = yield call(getTransaction);
    console.log("response.pool", response.pool)
    yield put(
      getTransactionSuccess({
        pool: response.pool,
      })
    );
    // action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      getTransactionFailure({
        error: e.message,
      })
    );
  }
}


function* transactionSaga() {
  yield all([takeLatest(GET_TRANSACTION_REQUEST, getTransactionSaga)]);
}

export default transactionSaga;
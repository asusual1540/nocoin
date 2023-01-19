import { all, call, put, takeLatest } from "redux-saga/effects";
import {server} from "./api"

import {
  getTransactionSuccess,
  getTransactionFailure,
  sendCoinSuccess,
  sendCoinFailure
} from "../reducers/transaction/actions";

import { GET_TRANSACTION_REQUEST, SEND_COIN_REQUEST } from "../reducers/transaction/actionTypes";
import { Transaction, SendCoinRequestPayload } from "../reducers/transaction/types";




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


const sendCoin = async (payload: SendCoinRequestPayload) => {
  console.log("payload", payload)
  console.log("payload.type", typeof(payload.amount))
  const {data}  = await server.post('/wallet/transact', {recipient : payload.recipient, amount: payload.amount})
  console.log("data", data)
  console.log("data", typeof(data))
  
  return {recent: data};
};



function* sendCoinSaga(action: any) {
  try {
    const response: { recent: Transaction } = yield call(sendCoin, {
      recipient : action.payload.recipient, amount: action.payload.amount
    });
    console.log("response.pool", response.recent)
    yield put(
      sendCoinSuccess({
        recent: response.recent,
      })
    );
    // action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      sendCoinFailure({
        error: e.message,
      })
    );
  }
}


function* transactionSaga() {
  yield all([takeLatest(GET_TRANSACTION_REQUEST, getTransactionSaga)]);
  yield all([takeLatest(SEND_COIN_REQUEST, sendCoinSaga)]);
}

export default transactionSaga;
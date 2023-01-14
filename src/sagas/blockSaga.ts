import { all, call, put, takeLatest } from "redux-saga/effects";
import {server} from "./api"

import {
  getBlockchainSuccess,
  getBlockchainFailure,
} from "../reducers/blockchain/actions";

import { GET_BLOCKCHAIN_REQUEST } from "../reducers/blockchain/actionTypes";
import { Block } from "../reducers/blockchain/types";




const getBlockchain = async () => {
  const { data } = await server.get('/blockchain')
  console.log("data", data)
  console.log("data", typeof(data))
  
  return {chain: data};
};



function* getBlockchainSaga(action: any) {
  try {
    const response: { chain: Block[] } = yield call(getBlockchain);
    console.log("response.chain", response.chain)
    yield put(
      getBlockchainSuccess({
        chain: response.chain,
      })
    );
    // action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      getBlockchainFailure({
        error: e.message,
      })
    );
  }
}


function* authSaga() {
  yield all([takeLatest(GET_BLOCKCHAIN_REQUEST, getBlockchainSaga)]);
}

export default authSaga;
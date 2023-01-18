import { all, call, put, takeLatest } from "redux-saga/effects";
import {server} from "./api"

import {
  getWalletSuccess,
  getWalletFailure,
} from "../reducers/wallet/actions";

import { GET_WALLET_REQUEST } from "../reducers/wallet/actionTypes";
import { Wallet } from "../reducers/wallet/types";




const getWallet = async () => {
  const { data } = await server.get('/wallet/info')
  console.log("data", data)
  console.log("data", typeof(data))
  
  return {wallet: data};
};



function* getWalletSaga(action: any) {
  try {
    const response: { wallet: Wallet } = yield call(getWallet);
    console.log("response.wallet", response.wallet)
    yield put(
      getWalletSuccess({
        details: response.wallet,
      })
    );
    // action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      getWalletFailure({
        error: e.message,
      })
    );
  }
}


function* walletSaga() {
  yield all([takeLatest(GET_WALLET_REQUEST, getWalletSaga)]);
}

export default walletSaga;
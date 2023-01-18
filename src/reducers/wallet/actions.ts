import {
  GET_WALLET_REQUEST,
  GET_WALLET_SUCCESS,
  GET_WALLET_FAILURE,
} from "./actionTypes";


import {
  GetWalletRequest,
  GetWalletSuccess,
  GetWalletSuccessPayload,
  GetWalletFailure,
  GetWalletFailurePayload,
} from "./types";

export const getWalletRequest = (): GetWalletRequest => ({
  type: GET_WALLET_REQUEST
});

export const getWalletSuccess = (payload: GetWalletSuccessPayload): GetWalletSuccess => ({
  type: GET_WALLET_SUCCESS,
  payload,
});

export const getWalletFailure = (payload: GetWalletFailurePayload): GetWalletFailure => ({
  type: GET_WALLET_FAILURE,
  payload,
});

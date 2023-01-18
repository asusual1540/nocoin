
import {
    GET_WALLET_REQUEST,
    GET_WALLET_SUCCESS,
    GET_WALLET_FAILURE,
  } from "./actionTypes";
  



export interface Wallet {
  address: string;
  private_key: string;
  public_key: string;
  balance: number;
}


export interface WalletState {
  details: Wallet;
  loading: boolean;
  pending: boolean;
  error: string;
}
  
export interface GetWalletRequest {
  type: typeof GET_WALLET_REQUEST;
}

export interface GetWalletSuccessPayload {
  details: Wallet;
}

export interface GetWalletFailurePayload {
  error: string;
}


export type GetWalletSuccess = {
  type: typeof GET_WALLET_SUCCESS,
  payload: GetWalletSuccessPayload,
};

export type GetWalletFailure = {
  type: typeof GET_WALLET_FAILURE,
  payload: GetWalletFailurePayload,
};



export type WalletActions =
  | GetWalletRequest
  | GetWalletSuccess
  | GetWalletFailure;
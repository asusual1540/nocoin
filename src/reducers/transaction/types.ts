
import {
    GET_TRANSACTION_REQUEST,
    GET_TRANSACTION_SUCCESS,
    GET_TRANSACTION_FAILURE,
    SEND_COIN_REQUEST,
    SEND_COIN_SUCCESS,
    SEND_COIN_FAILURE,
    RESET_RECENT_TRANSACTION
  } from "./actionTypes";
  


export interface Transaction {
  id: string,
  output: {
      [address: string]: number
  },
  input: {
      timestamp: string,
      amount: string, 
      address: string, 
      public_key : string, 
      signature: string,
  }
}



export interface TransactionState {
  loading: boolean;
  pending: boolean;
  pool: Transaction[];
  error: string | null;
  recent: Transaction | null;
}
  
export interface GetTransactionRequest {
  type: typeof GET_TRANSACTION_REQUEST;
}
  
export interface ResetRecentTransaction {
  type: typeof RESET_RECENT_TRANSACTION;
}
  
export interface SendCoinRequest {
  type: typeof SEND_COIN_REQUEST;
  payload: SendCoinRequestPayload;
}


export interface SendCoinRequestPayload {
   recipient: string;
   amount: number;
}
export interface GetTransactionSuccessPayload {
  pool: Transaction[];
}

export interface GetTransactionFailurePayload {
  error: string;
}
export interface SendCoinSuccessPayload {
  recent: Transaction;
}

export interface SendCoinFailurePayload {
  error: string;
}


export type GetTransactionSuccess = {
  type: typeof GET_TRANSACTION_SUCCESS,
  payload: GetTransactionSuccessPayload,
};

export type GetTransactionFailure = {
  type: typeof GET_TRANSACTION_FAILURE,
  payload: GetTransactionFailurePayload,
};

export type SendCoinSuccess = {
  type: typeof SEND_COIN_SUCCESS,
  payload: SendCoinSuccessPayload,
};

export type SendCoinFailure = {
  type: typeof SEND_COIN_FAILURE,
  payload: SendCoinFailurePayload,
};



export type TransactionActions =
  | GetTransactionRequest
  | GetTransactionSuccess
  | GetTransactionFailure
  | SendCoinRequest
  | SendCoinSuccess
  | SendCoinFailure
  | ResetRecentTransaction;

import {
    GET_TRANSACTION_REQUEST,
    GET_TRANSACTION_SUCCESS,
    GET_TRANSACTION_FAILURE,
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
}
  
export interface GetTransactionRequest {
  type: typeof GET_TRANSACTION_REQUEST;
}

export interface GetTransactionSuccessPayload {
  pool: Transaction[];
}

export interface GetTransactionFailurePayload {
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



export type TransactionActions =
  | GetTransactionRequest
  | GetTransactionSuccess
  | GetTransactionFailure;
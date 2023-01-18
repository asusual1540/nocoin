import {
    GET_TRANSACTION_REQUEST,
    GET_TRANSACTION_SUCCESS,
    GET_TRANSACTION_FAILURE
  } from "./actionTypes";


  import {
    GetTransactionRequest,
    GetTransactionSuccess,
    GetTransactionSuccessPayload,
    GetTransactionFailure,
    GetTransactionFailurePayload,
  } from "./types";
  
  export const getTransactionRequest = (): GetTransactionRequest => ({
    type: GET_TRANSACTION_REQUEST
  });
  
  export const getTransactionSuccess = (payload: GetTransactionSuccessPayload): GetTransactionSuccess => ({
    type: GET_TRANSACTION_SUCCESS,
    payload,
  });
  
  export const getTransactionFailure = (payload: GetTransactionFailurePayload): GetTransactionFailure => ({
    type: GET_TRANSACTION_FAILURE,
    payload,
  });
  
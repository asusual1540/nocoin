import {
    GET_TRANSACTION_REQUEST,
    GET_TRANSACTION_SUCCESS,
    GET_TRANSACTION_FAILURE,
    SEND_COIN_REQUEST,
    SEND_COIN_SUCCESS,
    SEND_COIN_FAILURE,
  } from "./actionTypes";


  import {
    GetTransactionRequest,
    GetTransactionSuccess,
    GetTransactionSuccessPayload,
    GetTransactionFailure,
    GetTransactionFailurePayload,
    SendCoinRequest,
    SendCoinSuccess,
    SendCoinRequestPayload,
    SendCoinSuccessPayload,
    SendCoinFailure,
    SendCoinFailurePayload,
  } from "./types";
  
  export const getTransactionRequest = (): GetTransactionRequest => ({
    type: GET_TRANSACTION_REQUEST,
  });
  
  export const getTransactionSuccess = (payload: GetTransactionSuccessPayload): GetTransactionSuccess => ({
    type: GET_TRANSACTION_SUCCESS,
    payload,
  });
  
  export const getTransactionFailure = (payload: GetTransactionFailurePayload): GetTransactionFailure => ({
    type: GET_TRANSACTION_FAILURE,
    payload,
  });
  
  export const sendCoinRequest = (payload: SendCoinRequestPayload): SendCoinRequest => ({
    type: SEND_COIN_REQUEST,
    payload
  });
  
  export const sendCoinSuccess = (payload: SendCoinSuccessPayload): SendCoinSuccess => ({
    type: SEND_COIN_SUCCESS,
    payload,
  });
  
  export const sendCoinFailure = (payload: SendCoinFailurePayload): SendCoinFailure => ({
    type: SEND_COIN_FAILURE,
    payload,
  });
  
import {
    GET_BLOCKCHAIN_REQUEST,
    GET_BLOCKCHAIN_SUCCESS,
    GET_BLOCKCHAIN_FAILURE
  } from "./actionTypes";


  import {
    GetBlockchainRequest,
    GetBlockchainSuccess,
    GetBlockchainSuccessPayload,
    GetBlockchainFailure,
    GetBlockchainFailurePayload,
  } from "./types";
  
  export const getBlockchainRequest = (): GetBlockchainRequest => ({
    type: GET_BLOCKCHAIN_REQUEST
  });
  
  export const getBlockchainSuccess = (payload: GetBlockchainSuccessPayload): GetBlockchainSuccess => ({
    type: GET_BLOCKCHAIN_SUCCESS,
    payload,
  });
  
  export const getBlockchainFailure = (payload: GetBlockchainFailurePayload): GetBlockchainFailure => ({
    type: GET_BLOCKCHAIN_FAILURE,
    payload,
  });
  
import {
    LOGIN_DEVICE_REQUEST,
    LOGIN_DEVICE_SUCCESS,
    LOGIN_DEVICE_FAILURE,
    SIGNUP_DEVICE_REQUEST,
    SIGNUP_DEVICE_SUCCESS,
    SIGNUP_DEVICE_FAILURE,
  } from "./actionTypes";
  
  import { AuthActions, AuthState } from "./types";
  
  const initialState: AuthState = {
    pending: false,
    token: "",
    user: null,
    error: null,
  };
  
  const reducers = (state = initialState, action: AuthActions) => {
    switch (action.type) {
      case SIGNUP_DEVICE_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case SIGNUP_DEVICE_FAILURE:
        return {
          ...state,
          pending: false,
          token: "",
          error: action.payload.error,
        };
  
      case SIGNUP_DEVICE_SUCCESS:
        return {
          ...state,
          pending: false,
          token: action.payload.token,
          error: null,
        };
  
      case LOGIN_DEVICE_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case LOGIN_DEVICE_SUCCESS:
        return {
          ...state,
          pending: false,
          token: action.payload.token,
          error: null,
        };
      case LOGIN_DEVICE_FAILURE:
        return {
          ...state,
          pending: false,
          token: "",
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };
  
  export default reducers;
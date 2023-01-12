import {
    LOGIN_DEVICE_REQUEST,
    LOGIN_DEVICE_FAILURE,
    LOGIN_DEVICE_SUCCESS,
    SIGNUP_DEVICE_REQUEST,
    SIGNUP_DEVICE_FAILURE,
    SIGNUP_DEVICE_SUCCESS,
  } from "./actionTypes";


  import {
    LoginDevicePayload,
    SignupDevicePayload,
    LoginDeviceRequest,
    LoginDeviceSuccess,
    LoginDeviceSuccessPayload,
    LoginDeviceFailure,
    LoginDeviceFailurePayload,
    SignupDeviceRequest,
    SignupDeviceSuccess,
    SignupDeviceSuccessPayload,
    SignupDeviceFailure,
    SignupDeviceFailurePayload,
  } from "./types";
  
  export const loginDeviceRequest = (payload: LoginDevicePayload): LoginDeviceRequest => ({
    type: LOGIN_DEVICE_REQUEST,
    payload,
  });
  
  export const loginDeviceSuccess = (payload: LoginDeviceSuccessPayload): LoginDeviceSuccess => ({
    type: LOGIN_DEVICE_SUCCESS,
    payload,
  });
  
  export const loginDeviceFailure = (payload: LoginDeviceFailurePayload): LoginDeviceFailure => ({
    type: LOGIN_DEVICE_FAILURE,
    payload,
  });
  
  export const signupDeviceRequest = (payload: SignupDevicePayload): SignupDeviceRequest => ({
    type: SIGNUP_DEVICE_REQUEST,
    payload,
  });
  
  export const signupDeviceSuccess = (
    payload: SignupDeviceSuccessPayload
  ): SignupDeviceSuccess => ({
    type: SIGNUP_DEVICE_SUCCESS,
    payload,
  });
  
  export const signupDeviceFailure = (
    payload: SignupDeviceFailurePayload
  ): SignupDeviceFailure => ({
    type: SIGNUP_DEVICE_FAILURE,
    payload,
  });
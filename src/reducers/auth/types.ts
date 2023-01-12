
import {
    LOGIN_DEVICE_REQUEST,
    LOGIN_DEVICE_SUCCESS,
    LOGIN_DEVICE_FAILURE,
    SIGNUP_DEVICE_REQUEST,
    SIGNUP_DEVICE_SUCCESS,
    SIGNUP_DEVICE_FAILURE,
  } from "./actionTypes";
  
  export interface IAuthSession {
    token: string;
  }
  
  export interface AuthState {
    pending: boolean;
    token: string;
    user: any;
    error: string | null;
  }
  
  export interface LoginDevicePayload {
    values: { email: string, password: string };
    callback: any;
  }
  
  export interface LoginDeviceSuccessPayload {
    token: string;
  }
  
  export interface LoginDeviceFailurePayload {
    error: string;
  }
  
  export interface SignupDeviceSuccessPayload {
    token: string;
  }
  
  export interface SignupDeviceFailurePayload {
    error: string;
  }
  
  export interface LoginDeviceRequest {
    type: typeof LOGIN_DEVICE_REQUEST;
    payload: LoginDevicePayload;
  }
  
  export type LoginDeviceSuccess = {
    type: typeof LOGIN_DEVICE_SUCCESS,
    payload: LoginDeviceSuccessPayload,
  };
  
  export type LoginDeviceFailure = {
    type: typeof LOGIN_DEVICE_FAILURE,
    payload: LoginDeviceFailurePayload,
  };
  
  export interface SignupDevicePayload {
    values: { email: string, password: string };
    callback: any;
  }
  
  export interface SignupDeviceRequest {
    type: typeof SIGNUP_DEVICE_REQUEST;
    payload: SignupDevicePayload;
  }
  
  export type SignupDeviceSuccess = {
    type: typeof SIGNUP_DEVICE_SUCCESS,
    payload: SignupDeviceSuccessPayload,
  };
  
  export type SignupDeviceFailure = {
    type: typeof SIGNUP_DEVICE_FAILURE,
    payload: SignupDeviceFailurePayload,
  };
  
  export type AuthActions =
    | LoginDeviceRequest
    | LoginDeviceSuccess
    | LoginDeviceFailure
    | SignupDeviceFailure
    | SignupDeviceSuccess
    | SignupDeviceRequest;
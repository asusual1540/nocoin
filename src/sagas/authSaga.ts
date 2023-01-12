import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  loginDeviceFailure,
  loginDeviceSuccess,
  signupDeviceSuccess,
  signupDeviceFailure,
} from "../reducers/auth/actions";
import { LOGIN_DEVICE_REQUEST, SIGNUP_DEVICE_REQUEST } from "../reducers/auth/actionTypes";
import { IAuthSession } from "../reducers/auth/types";





const signupDevice = async (payload: { username: string; password: string }) => {
  const { data } = await axios.post<IAuthSession>(
    "http://128.199.207.121:7351/api/signup",
    { username: payload.username, password: payload.password },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};



const loginDevice = async (payload: { username: string; password: string }) => {
  const { data } = await axios.post<IAuthSession>(
    "http://128.199.207.121:7351/api/login",
    { username: payload.username, password: payload.password },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};



function* loginDeviceSaga(action: any) {
  try {
    const response: { token: string } = yield call(loginDevice, {
      username: action.payload.values.username,
      password: action.payload.values.password,
    });

    yield put(
      loginDeviceSuccess({
        token: response.token,
      })
    );
    action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      loginDeviceFailure({
        error: e.message,
      })
    );
  }
}

function* signupDeviceSaga(action: any) {
  try {
    const response: { token: string } = yield call(signupDevice, {
      username: action.payload.username,
      password: action.payload.password,
    });

    yield put(
      signupDeviceSuccess({
        token: response.token
      })
    );
    action.payload.callback(response.token);
  } catch (e: any) {
    yield put(
      signupDeviceFailure({
        error: e.message,
      })
    );
  }
}

function* authSaga() {
  yield all([takeLatest(LOGIN_DEVICE_REQUEST, loginDeviceSaga)]);
  yield all([takeLatest(SIGNUP_DEVICE_REQUEST, signupDeviceSaga)]);
}

export default authSaga;
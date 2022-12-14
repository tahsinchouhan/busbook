import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { GET_OTP, LOGOUT, VERIFY_OTP, LOGIN_EMAIL } from "../actions";
import { API_PATH } from "../../Path/Path";
import {
  getOtpSuccess,
  setUser,
  loginEmailSuccess,
  getOtpError,
  getVerifyOtpError
} from "./actions";
import axios from "axios";
import { fetchError, hideMessage } from "../common/actions";

const OtpAsync = (mobile) =>
  axios
    .post(API_PATH + "/api/v1/customer/otp", {
      mobile,
    })
    .then((response) => response)
    .catch((error) => error);

const fetchVerifyOtpAsync = async (payload) =>
  await axios
    .post(API_PATH + "/api/v1/customer/verifyotp", {
      mobile: payload.mobile,
      registrationMobileOTP: payload.otp,
    })
    .then((response) => {
      return response;
    })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });

const loginEmailAsync = async (payload) =>
  await axios
    .post(API_PATH + "/api/v1/customer/login-with-email", {
      email: payload.email,
      password: payload.password,
    })
    .then((response) => {
      return response;
    })
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });

function* Email({ payload }) {
  try {
    const apiEmail = yield call(loginEmailAsync, payload);
    console.log('apiEmail', apiEmail)
    yield put(loginEmailSuccess(apiEmail.data));
  } catch (error) {
    console.log(error);
  }
}

function* Otp({ payload }) {
  try {
    const apiOtp = yield call(OtpAsync, payload);
    console.log("error123", apiOtp.response);
    if(apiOtp.response.status == 200){
      yield put(getOtpSuccess(apiOtp.data));
    }else{
      yield put(getOtpError(apiOtp.response.data));
    }
   
  } catch (error) {
    yield put(getOtpError(error));
  }
}
function* fetchVerifyOtp({ payload }) {
  try {
    const user_data = yield call(fetchVerifyOtpAsync, payload);
    if (user_data?.status == 200) {
      localStorage.setItem(
        "customer_id",
        JSON.stringify(user_data.data.data.user._id)
      );
      localStorage.setItem("user_data", JSON.stringify(user_data.data.data));
      yield put(setUser(user_data.data.data));
      localStorage.setItem("mobile", user_data.data.data.user.mobile);
      yield put(hideMessage());
    } else {
      yield put(getVerifyOtpError("OTP verification failed!!"));
    }
  } catch (error) {
    yield put(getVerifyOtpError("OTP verification failed!!"));
  }
}

function* fetchLogout({ payload }) {
  try {
    localStorage.removeItem("user_data");
    localStorage.removeItem("customer_id");
    localStorage.removeItem("dm_pass_id");
    localStorage.removeItem("mobile");
  } catch (error) {
    yield put(fetchError("Something went wrong"));
  }
}

function* watchGetPlaceholder() {
  yield takeEvery(GET_OTP, Otp);
  yield takeEvery(LOGIN_EMAIL, Email);
}

function* verifyOtp() {
  yield takeEvery(VERIFY_OTP, fetchVerifyOtp);
}

function* logout() {
  yield takeEvery(LOGOUT, fetchLogout);
}

export default function* rootSaga() {
  yield all([fork(watchGetPlaceholder)]);
  yield all([fork(verifyOtp)]);
  yield all([fork(logout)]);
}

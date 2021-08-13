import {
    GET_OTP,
    GET_OTP_SUCCESS,
    GET_OTP_ERROR
} from "../actions";

export const getOtp = (value) => ({
    type: GET_OTP,
    payload: value,
});

export const getOtpSuccess = (value) => ({
    type: GET_OTP_SUCCESS,
    payload: value,
});

export const getOtpError = (value) => ({
    type: GET_OTP_ERROR,
    payload: value,
});
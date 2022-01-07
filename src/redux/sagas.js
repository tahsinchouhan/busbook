import {all} from 'redux-saga/effects';
import authSaga from './auth/saga';
import busSaga from './bus/saga';
import loginSaga from './login/saga';
import dmpassSaga from './dmpass/saga';
import exploreSaga from './explore/saga';
import hotelSaga from './hotel/saga';
import packagesSaga from './packages/saga';
import signUpSaga from './signup/saga';
import audioJourneySaga from './audioJourney/saga'

export default function* rootSaga(getState){
    yield all([
        authSaga(),
        busSaga(),
        loginSaga(),
        dmpassSaga(),
        exploreSaga(),
        hotelSaga(),
        packagesSaga(),
        signUpSaga(),
        audioJourneySaga()
      ]);
}
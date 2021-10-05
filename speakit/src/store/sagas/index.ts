import { all } from 'redux-saga/effects';
import { signupWatcherSaga } from "./signup";


export default function* rootSaga() {
  yield all([
    signupWatcherSaga(),
  ]);
};

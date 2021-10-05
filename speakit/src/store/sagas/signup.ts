import { call, put, takeEvery } from "@redux-saga/core/effects";
import firebase from "firebase/app";
import { SET_ERROR, SET_USER, SignUpData, SIGN_UP_SAGA, User } from "../types";

export function* signupWorkerSaga({ payload }: { payload: SignUpData }) {
  try {
    const res = (yield call(firebase.auth().createUserWithEmailAndPassword, payload.email, payload.password)) as firebase.auth.UserCredential;
    if (res.user) {
      const userData: User = {
        email: payload.email,
        firstName: payload.firstName,
        id: res.user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      };
      yield call(firebase.firestore().collection('/users').doc(res.user.uid).set, userData);
        yield put({
          type: SET_USER,
          payload: userData
        });
    }
  } catch (err: any) {
    yield put({
      type: SET_ERROR,
      payload: err.message
    });
  }
}

export function* signupWatcherSaga() {
  yield takeEvery<any>(SIGN_UP_SAGA, signupWorkerSaga);
}

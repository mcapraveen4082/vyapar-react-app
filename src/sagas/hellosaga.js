import { fork, call, takeEvery, all, put } from 'redux-saga/effects';

// function* helloSagaCall(action){
//     yield put({type : 'GET_HELLO_APP', payload: action.payload});
// }
// export function* helloSaga() {
//     yield takeEvery("HELLO_APP", helloSagaCall);
// }

export function* helloSagaCall(action) {
    yield put({type : 'GET_HELLO_APP'});
}

export function* helloSaga() {
    yield takeEvery('HELLO_APP', helloSagaCall);
}
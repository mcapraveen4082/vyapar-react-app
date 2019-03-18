
import { fork, call, takeEvery, all, put } from 'redux-saga/effects';
import {helloSaga} from './hellosaga';



export default function* rootSaga() {
    yield [
        fork(helloSaga),
        // barSagas
    ]
}
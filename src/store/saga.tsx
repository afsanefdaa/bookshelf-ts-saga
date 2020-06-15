import {DECREASE_COUNT, INCREASE_COUNT} from './../store/home/constant';

import { take, all } from 'redux-saga/effects';


function* counterController() {
    yield take(INCREASE_COUNT);
    yield take(DECREASE_COUNT);
}

export default function* rootSaga() {
    yield all([
        counterController(),
    ]);
}

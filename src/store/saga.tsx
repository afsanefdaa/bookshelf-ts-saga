import {DECREASE_COUNT, INCREASE_COUNT, BOOKS_REQUEST, BOOKS_SUCCESS} from './../store/home/constant';

import { takeLatest, take, all, put } from 'redux-saga/effects';


function* fetchBooks() {
    const json = yield fetch('http://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2&limit=3')
        .then(response => response.json());
    yield put({ type: BOOKS_SUCCESS, payload: json });
}

function* counterController() {
    yield take(INCREASE_COUNT);
    yield take(DECREASE_COUNT);
}

function* actionWatcher() {
    yield takeLatest(BOOKS_REQUEST, fetchBooks);
}

export default function* rootSaga() {
    yield all([
        counterController(),
        actionWatcher()
    ]);
}

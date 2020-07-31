import { put, takeEvery, all } from 'redux-saga/effects'
import { FETCH_PRODUCTS, NEW_PRODUCT, UPDATE_PRODUCT, INCREMENT, DECREMENT } from "./Actions/Types";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchAsync() {
    yield delay(1000)
    yield put({type: FETCH_PRODUCTS})
}

function* newAsync() {
    yield delay(1000)
}

function* updateAsync() {
    yield delay(1000)
}

function* incrementAsync() {
    yield delay(1000)
    yield put({type: INCREMENT})
}

function* decrementAsync() {
    yield delay(1000)
    yield put({type: DECREMENT})

}

function* watchFetchAsync() {
    yield takeEvery(FETCH_PRODUCTS, fetchAsync)
}

function* watchNewAsync() {
    yield takeEvery(NEW_PRODUCT, newAsync)
}

function* watchUpdateAsync() {
    yield takeEvery(UPDATE_PRODUCT, updateAsync)
}

function* watchIncrementAsync() {
    yield takeEvery(INCREMENT, incrementAsync)
}

function* watchDecrementAsync() {
    yield takeEvery(DECREMENT, decrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchFetchAsync(),
        watchNewAsync(),
        watchUpdateAsync(),
        watchIncrementAsync(),
        watchDecrementAsync()
    ])
}
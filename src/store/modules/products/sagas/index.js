import { takeEvery, all } from "redux-saga/effects";

import Types from "../actions/actionTypes";

import loadProductsEffect from "./effects/loadProductsEffect";

export function* watchLoadProducts() {
  yield takeEvery(Types.LOAD_PRODUCTS_REQUEST, loadProductsEffect);
}

function* rootSaga() {
  yield all([watchLoadProducts()]);
}

export default rootSaga;

import { all } from "redux-saga/effects";

import products from "./modules/products/sagas";

export default function* rootSaga() {
  yield all([products()]);
}

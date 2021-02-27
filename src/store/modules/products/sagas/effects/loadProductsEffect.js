import { put, call } from "redux-saga/effects";

import { request } from "utils/http";
import loadProductsQuery from "../../repository/loadProductsQuery";
import actions from "../../actions";

export function* loadProductsEffect() {
  try {
    const { data } = yield call(request, loadProductsQuery);
    yield put(actions.loadProductsSuccess(data));
  } catch (error) {
    yield put(actions.loadProductsFailure({ status: error.status }));
    console.log("products error:", error);
  }
}
export default loadProductsEffect;

import Switch from "../../../../utils/functors/Switch";

import INITIAL_STATE from "../state";
import Types from "../actions/actionTypes";

import * as loadProducts from "./operations/loadProducts";

const reducer = (state = INITIAL_STATE, { type, payload }) =>
  Switch.on(type, state, payload, INITIAL_STATE)
    //LOAD PRODUCTS
    .case(Types.LOAD_PRODUCTS_REQUEST, loadProducts.request)
    .case(Types.LOAD_PRODUCTS_SUCCESS, loadProducts.success)
    .case(Types.LOAD_PRODUCTS_FAILURE, loadProducts.failure)
    //DEFAULT
    .default(state);

export default reducer;

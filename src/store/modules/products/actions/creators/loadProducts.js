import Types from "../actionTypes";

const loadProductsRequest = () => ({
  type: Types.LOAD_PRODUCTS_REQUEST,
});

const loadProductsSuccess = (payload) => ({
  type: Types.LOAD_PRODUCTS_SUCCESS,
  payload,
});

const loadProductsFailure = (payload) => ({
  type: Types.LOAD_PRODUCTS_FAILURE,
  payload,
});

export default {
  loadProductsRequest,
  loadProductsSuccess,
  loadProductsFailure,
};

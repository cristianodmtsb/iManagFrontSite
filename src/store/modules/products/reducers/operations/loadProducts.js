export const request = (state, payload, initialState) => ({
  ...state,
  products: [],
  isLoadingProducts: true,
  error: { ...initialState.error },
});

export const success = (state, payload, initialState) => ({
  ...state,
  products: payload,
  isLoadingProducts: false,
  error: { ...initialState.error },
});

export const failure = (state) => ({
  ...state,
  isLoadingProducts: false,
  error: {
    msg: "Ops! Não conseguimos carregar seus produtos.",
    hasError: true,
  },
});

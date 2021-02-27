import { Maybe } from "utils/functors";

export default (state) =>
  Maybe.of(state)
    .map((state) => state.products)
    .map((products) => ({
      isLoadingProducts: products.isLoadingProducts,
    }))
    .get({ isLoadingProducts: false });

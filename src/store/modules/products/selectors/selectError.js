import { Maybe } from "utils/functors";

export default (state) =>
  Maybe.of(state)
    .map((state) => state.products)
    .map((products) => products.error)
    .get({ msg: "", hasError: false });

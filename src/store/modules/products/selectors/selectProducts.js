import { Maybe } from "utils/functors";

export default (state) =>
  Maybe.of(satate)
    .map((state) => state.products)
    .map((products) => products.products)
    .get([]);

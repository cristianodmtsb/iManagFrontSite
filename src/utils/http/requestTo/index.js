import axios from "axios";

import { envKeys } from "../../../config";

import HttpError from "../HttpError";
import buildResponse from "./buildResponse";
import { Maybe } from "../../functors";

const Axios = axios.create({
  baseURL: envKeys.apiUrl(),
});

const handleHttpResponse = (res) => {
  if (res.status !== 200 && res.status !== 201) {
    throw HttpError({ status: res.status });
  }

  return buildResponse(res);
};

const requestTo = (requestOption, ...args) => {
  let options = {};

  if (typeof requestOption === "function") {
    options = Maybe.of(requestOption(...args)).get({});
  } else if (typeof requestOption === "object") {
    options = Maybe.of(requestOption).get({});
  } else {
    throw Error("Invalid Request");
  }

  if (!options.url || !options.method) {
    throw Error("requestOptions must return {url, method}");
  }

  return Axios(options).then(handleHttpResponse);
};

export default requestTo;

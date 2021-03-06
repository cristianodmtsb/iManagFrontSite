import parseToCamel from "../../object/parseSnakeCaseToCamelObject";
import { Try } from "../../functors";

const SAFE_RES = {
  data: {
    status: 1, // error status
    data: {},
    totalPages: 0,
    currentPage: 0,
  },
};

const buildPagination = (resData) => ({
  totalPages: resData.totalPages,
  currentPage: resData.currentPage,
});

const buildResponse = (res) => {
  const resData = Try.of(() => parseToCamel(res.data), "error").get(SAFE_RES);

  /* TODO: #2 remove this resDataExternal when the user endpoint became ajusted to the response structure */
  const resDataExternal = Try.of(() => parseToCamel(res), "error").get(
    SAFE_RES
  );

  const headers = Try.of(() => parseToCamel(res.headers), "error").get({});

  return {
    headers,
    httpStatus: res.status,
    status: resData.status,
    data: resData.data || resDataExternal.data,
    pagination: buildPagination(resData),
  };
};

export default buildResponse;

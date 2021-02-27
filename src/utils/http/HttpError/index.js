const INITAL_STATE = {
  name: 'HttpError',
  message: 'error during Http request',
  meta: '',
  status: 1,
};

const HttpError = error => {
  if (!error) {
    return INITAL_STATE;
  }

  const { name, message, meta, status } = { ...INITAL_STATE, ...error };

  return { name, message, meta, status };
};

export default HttpError;

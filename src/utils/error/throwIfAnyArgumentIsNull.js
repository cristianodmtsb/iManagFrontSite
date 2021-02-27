const throwIfAnyArgumentIsNull = (errorMsg, ...agrs) => {
  const hasError = agrs.some(arg => !arg);
  if (hasError) {
    throw new Error(errorMsg);
  }
};

export default throwIfAnyArgumentIsNull;

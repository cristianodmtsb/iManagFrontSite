import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const devEnv =
  window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== "production";

const middlewares = devEnv
  ? compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  : applyMiddleware(sagaMiddleware);

const configureStore = () => {
  const store = createStore(rootReducer, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;

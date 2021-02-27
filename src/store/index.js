import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const configureStore = () => {
  const store = createStore(rootReducer, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
};

export const storeWrapper = createWrapper(configureStore, { debug: false });

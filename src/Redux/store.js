import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./index";

// デバッグ用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./index", () => {
      const nextRootReducer = require("./index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default AppStore;

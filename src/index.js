import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppStore from "./Redux/store";
import { createStore } from "redux";
import { reducer } from "./Redux/reducer";

import App from "./app";
// middlewar react-thunkを追加
const store = AppStore();

// 通常のstore
// const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

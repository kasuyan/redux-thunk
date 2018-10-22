import { IS_LOGIN } from "./action-type";

export const getLogin = state => {
  console.log("getLogin", state);
  return dispatch => {
    dispatch({
      type: IS_LOGIN,
      isLogin: state
    });
  };
};

export const getLogout = state => {
  console.log("getLogout", state);
  return dispatch => {
    dispatch({
      type: IS_LOGIN,
      isLogin: state
    });
  };
};

import { IS_LOGIN } from "./action-type";

// return Object
export const isLogin = state => {
  return {
    type: IS_LOGIN,
    isLogin: state
  };
};

export const getLogin = state => {
  return dispatch => {
    dispatch(isLogin(state));
  };
};

export const getLogout = state => {
  return dispatch => {
    dispatch(isLogin(state));
  };
};

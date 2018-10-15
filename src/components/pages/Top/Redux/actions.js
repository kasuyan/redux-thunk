import { GET_LOGIN, GET_LOGOUT, IS_LOGIN } from "./action-type";
// import { isLogin } from "../../../../Redux/action";

export const isLogin = status => {
  return {
    type: IS_LOGIN,
    status
  };
};

export const getLogin = status => {
  return dispatch => {
    dispatch(isLogin(true));
  };
};

export const getLogout = status => ({
  type: GET_LOGOUT,
  status
});

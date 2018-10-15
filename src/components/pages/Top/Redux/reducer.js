import { GET_LOGIN, GET_LOGOUT, IS_LOGIN } from "./action-type";

const initialState = {
  isLogin: false
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case "IS_LOGIN":
      return action.isLogin;
    default:
      return state;
  }
};

export const onClickLoginBtn = (state = false, action) => {
  switch (action.type) {
    case "GET_LOGIN":
      return action;
    default:
      return state;
  }
};

export const onClickLogoutBtn = (state = false, action) => {
  switch (action.type) {
    case "GET_LOGOUT":
      return action;
    default:
      return state;
  }
};

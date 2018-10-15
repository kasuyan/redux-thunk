import { IS_LOGIN } from "./action-type";

const initialState = {
  isLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOGIN:
      return { isLogin: action.isLogin };
    default:
      return state;
  }
};

import { IS_LOGIN } from "./action-type"

const initialState = {
  isLogin: false
}

export const isLogin = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return action.isLogin;
    default:
      return state;
  }
}

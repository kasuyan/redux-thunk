import { IS_OPEN } from "./action-type";

// Reducerで初期値を設定
const initialState = {
  isOpen: false,
  title: "TOPです。"
};

// アクションが起こった時の処理
export default (state = initialState, action) => {
  switch (action.type) {
    case IS_OPEN:
      return { isOpen: action.state };
    default:
      return state;
  }
};

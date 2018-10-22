import { IS_OPEN } from "./action-type";

// アクション時の動き
export const onClickOpen = state => {
  return dispatch => {
    dispatch({
      type: IS_OPEN,
      state
    });
  };
};

export const onClickClose = state => {
  return dispatch => {
    dispatch({
      type: IS_OPEN,
      state
    });
  };
};

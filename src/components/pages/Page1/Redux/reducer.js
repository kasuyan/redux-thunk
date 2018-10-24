import { RANKING_DATA } from "./action-type";
import { merge } from "lodash";

const initialState = {
  rankData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RANKING_DATA:
      console.log(state.rankData);
      return { rankData: state.rankData.concat(action.respons.results) };
    default:
      return state;
  }
};

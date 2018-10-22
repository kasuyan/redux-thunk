import { RANKING_DATA } from "./action-type";

const initialState = {
  rankData: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RANKING_DATA:
      console.log("action", action.respons.results);
      return { rankData: action.respons.results };
    default:
      return state;
  }
};

import { RANKING_DATA } from "./action-type";

export const fetchRanking = state => {
  console.log("fetchRanking");
  return dispatch => {
    fetch("http://localhost:3000/ranking", { method: "GET" })
      .then(respons => {
        console.log("fetchRanking", respons);
        return respons;
      })
      .then(respons => {
        return respons.json();
      })
      .then(respons => {
        console.log("resluts", respons);
        dispatch({
          type: RANKING_DATA,
          respons
        });
      });
  };
};

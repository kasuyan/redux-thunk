import { combineReducers } from "redux";
import App from "./reducer";
import Top from "../components/pages/Top/Redux/reducer";

export default combineReducers({
  App,
  Top
});

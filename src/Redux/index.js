import { combineReducers } from "redux";
import App from "./reducer";
import Top from "../components/pages/Top/Redux/reducer";
import Page1 from "../components/pages/Page1/Redux/reducer";

export default combineReducers({
  App,
  Top,
  Page1
});

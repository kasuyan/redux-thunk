import { combineReducers } from "redux";
import { app } from "./reducer";
import {
  onClickLoginBtn,
  onClickLogoutBtn
} from "../components/pages/Top/Redux/reducer";

export default combineReducers({
  onClickLoginBtn,
  onClickLogoutBtn
});

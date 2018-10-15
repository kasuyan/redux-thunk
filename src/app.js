import React from "react";
import Router from "./router";
import { connect } from "react-redux";
import { isLogin, getLogin, getLogout } from "./Redux/action";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">TOP</a>
          </li>
          <li>
            <a href="/page1">Page1</a>
          </li>
          <li>
            <a href="/page2">Page2</a>
          </li>
          <li>
            <a href="/page3">Page3</a>
          </li>
        </ul>
        <button onClick={this.props.getLogin}>ログイン</button>
        <button onClick={this.props.getLogout}>ログアウト</button>
        <Router />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispachToProps = dispath => {
  return {
    getLogin: () => {
      dispath(getLogin(true));
    },
    getLogout: () => {
      dispath(isLogin(false));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

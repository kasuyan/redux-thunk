import React from "react";
import Router from "./router";
import { connect } from "react-redux";
import { isLogin, getLogin, getLogout } from "./Redux/action";

class App extends React.Component {
  render() {
    const { isLogin } = this.props.App;
    return (
      <div>
        <p>{isLogin ? "ログイン中" : "未ログイン"}</p>
        <button onClick={this.props.getLogin}>ログイン</button>
        <button onClick={this.props.getLogout}>ログアウト</button>
        <Router />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("app.mapStateToProps", state);
  return state;
};

const mapDispachToProps = dispath => {
  return {
    getLogin: () => {
      dispath(getLogin(true));
    },
    getLogout: () => {
      dispath(getLogout(false));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Actions from "./Redux/actions";
import * as ActionLogin from "../../../Redux/action";

class Top extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log("Top.props", this.props);

    this.onClickOpen = this.onClickOpen.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickLogin = this.onClickLogin.bind(this);
    this.onClickLogout = this.onClickLogout.bind(this);
  }

  onClickOpen() {
    const { onClickOpen } = this.props.TopAction;
    onClickOpen(true);
  }

  onClickClose() {
    const { onClickClose } = this.props.TopAction;
    onClickClose(false);
  }

  onClickLogin() {
    const { getLogin } = this.props.AppAction;
    getLogin(true);
  }

  onClickLogout() {
    const { getLogout } = this.props.AppAction;
    getLogout(false);
  }

  render() {
    const { isLogin } = this.props.App;
    const { isOpen, title } = this.props.Top;

    return (
      <section>
        <h1>TOPです</h1>
        <p>{isLogin ? "ログイン中" : "未ログイン"}</p>
        <p>
          今は
          {isOpen ? "オープン" : "クローズ"}
          です
        </p>
        <button onClick={this.onClickOpen}>オープン</button>
        <button onClick={this.onClickClose}>クローズ</button>
        <p>
          <button onClick={this.onClickLogin}>ログイン</button>
          <button onClick={this.onClickLogout}>ログアウト</button>
        </p>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log("Top.mapStateToProps", state);
  return {
    App: state.App,
    Top: state.Top
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AppAction: bindActionCreators(ActionLogin, dispatch),
    TopAction: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);

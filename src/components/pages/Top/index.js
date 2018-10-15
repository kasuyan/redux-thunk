import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { getLogin, getLogout } from "./Redux/actions";

class Top extends React.Component {
  render() {
    const { getLogin } = this.props;
    return (
      <section>
        <h1>TOPです</h1>
        <p>{this.props.isLogin ? "ログインしてるよ" : "ログインしてないよ"}</p>
        <button onClick={getLogin}>ログイン</button>
        <button>ログアウト</button>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getLogin, getLogout }, dispatch);
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Top);
export default Top;

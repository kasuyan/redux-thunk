import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Actions from "./Redux/actions";

class Top extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log("aaa", this.props);
    const { onClickOpen } = this.props;
    onClickOpen(true);
  }

  render() {
    console.log("this.props", this.props);
    const { isOpen, title } = this.props;

    return (
      <section>
        <h1>TOPです</h1>
        <p>
          今は
          {String(isOpen)}
          です
        </p>
        <button onClick={this.onClick}>オープン</button>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state.Top;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);

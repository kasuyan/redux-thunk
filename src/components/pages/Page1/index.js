import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Actions from "./Redux/actions";

class Page1 extends React.Component {
  componentDidMount() {
    console.log("Page1.props", this.props);
    const { fetchRanking } = this.props.Page1Action;
    fetchRanking();
  }

  render() {
    return (
      <section>
        <h1>Page1です</h1>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    Page1Action: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);

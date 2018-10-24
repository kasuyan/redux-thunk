import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Actions from "./Redux/actions";

class Page1 extends React.Component {
  componentDidMount() {
    console.log("Page1.props=", this.props, this.props.Page1.rankData.length);
    if (this.props.Page1.rankData.length) {
      return;
    }

    const { fetchRanking } = this.props.Page1Action;
    console.log("fetch!!!");
    fetchRanking();
  }

  render() {
    const { rankData } = this.props.Page1;
    const { fetchRanking } = this.props.Page1Action;
    if (!rankData.length) {
      return null;
    }

    return (
      <section>
        <h1>Page1です react-thunk</h1>

        {rankData.map((item, index) => (
          <li key={index}>
            {item.rank}位：{item.text}
          </li>
        ))}
        <button onClick={fetchRanking}>もっとみる</button>
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

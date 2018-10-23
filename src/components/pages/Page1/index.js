import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Actions from "./Redux/actions";

class Page1 extends React.Component {
  componentDidMount() {
    const { fetchRanking } = this.props.Page1Action;
    fetchRanking();
  }

  render() {
    const { rankData } = this.props.Page1;
    return (
      <section>
        <h1>Page1です react-thunk</h1>

        {rankData.map(item => (
          <li key={item.rank}>
            {item.rank}位：{item.text}
          </li>
        ))}
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

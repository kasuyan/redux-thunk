import React from "react";
import { connect } from "react-redux";

class Page1 extends React.Component {
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

export default connect(mapStateToProps)(Page1);

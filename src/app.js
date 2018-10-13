import React from 'react'
import Router from "./router"
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="/">TOP</a></li>
          <li><a href="/page1">Page1</a></li>
          <li><a href="/page2">Page2</a></li>
          <li><a href="/page3">Page3</a></li>
        </ul>
        <Router />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.isLogin
});


export default connect(mapStateToProps)(App);

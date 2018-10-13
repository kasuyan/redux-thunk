import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Top from './components/pages/Top'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/page3" component={Page3} />
        </Switch>
      </BrowserRouter>
    )
  }
}

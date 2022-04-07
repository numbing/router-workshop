import React, { Component } from 'react'
import About from './pageComponent/About'
import Home from './pageComponent/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />



          </Switch>

        </div>
      </Router >
    )
  }
}

export default App

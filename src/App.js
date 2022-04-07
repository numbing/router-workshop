import React, { Component } from 'react'
import About from './pageComponent/About'
import Home from './pageComponent/Home'
import Profile from './pageComponent/Profile'

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

          <Link to='about'>about</Link>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile/:potato" component={Profile} />
          </Switch>

        </div>
      </Router >
    )
  }
}

export default App

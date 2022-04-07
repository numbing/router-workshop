import React, { Component } from 'react'
import About from './pageComponent/About'
import Home from './pageComponent/Home'
import Pokemons from './pageComponent/Pokemons'
import PokemonDetails from './pageComponent/PokemonDetails'

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
          <Link to='pokemons'>pokemons</Link>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/pokemons" component={Pokemons} />
            <Route exact path="/pokemons/:pokeName" component={PokemonDetails} />
          
          </Switch>

        </div>
      </Router >
    )
  }
}

export default App

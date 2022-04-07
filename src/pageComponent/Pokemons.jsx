import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Pokemons extends Component {

  state = {
    pokemons: []
  }

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(resultFromPokemon => {

      this.setState({
        pokemons: resultFromPokemon.data.results
      })
    })
  }

  render() {
    console.log("state", this.state);
    return (
      <div>{
        this.state.pokemons.map(pokemon => {
          return <Link to={`pokemons/${pokemon.name}`} key={pokemon.name}>{pokemon.name}</Link>
        })

      }</div>
    )
  }
}

export default Pokemons

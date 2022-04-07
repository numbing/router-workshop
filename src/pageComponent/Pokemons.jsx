import React, { Component } from 'react'
import axios from 'axios'
 class Pokemons extends Component {

  state= {
    pokemons:[]
  }

  componentDidMount(){
    axios.get("https://pokeapi.co/api/v2/pokemon").then(resultFromPokemon=>{
      console.log("resultFromPokemon",resultFromPokemon);
    })
  }

  render() {
    return (
      <div>Pokemons</div>
    )
  }
}

export default Pokemons

import React, { Component } from 'react'
import axios from 'axios'
export default class PokemonDetails extends Component {


  state = {
    pokemon: {},
    loading: true
  }


  componentDidMount() {
    let pokeName = this.props.match.params.pokeName;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(responseFromPokemon => {
      console.log("responseFromPokemon", responseFromPokemon);

      this.setState({
        pokemon: responseFromPokemon.data,
        loading: false

      })
    })
  }


  render() {
    console.log(this.state.pokemon);
    return (
      <div>
        {this.state.loading ? <h1>Loading.....</h1> :
          <div>
            <h1>{this.state.pokemon.name}</h1>
            <p>{this.state.pokemon.height}</p>
            <img src={this.state.pokemon.sprites.front_default} alt="" />
          </div>

        }
      </div>


    )
  }
}

import React, { Component } from 'react'
import PokeballImage from '../assets/pokeball.png'
import PokemonDetails from './PokemonDetails';
import {v4} from 'uuid'

export class ListPokeCards extends Component {
constructor(props){
super(props);

  this.state={
    ShowPokemonDetails:false
  }
  this.Details=this.Details.bind(this);
}

  Details(){
    
    this.setState({
      ShowPokemonDetails: !this.state.ShowPokemonDetails,
    },()=>
    
    document.body.classList.toggle('dark'));

  }

  render() {
    const pokemon = this.props.pokemons;
    return (
      <div className='col-xs-12 col-md-4'>
      <div className='col-8' style={{backgroundColor:`white`}}  >
        <div className='card'onClick={this.Details} >
        <div className="card text-red  mb-3" 
        style={{backgroundColor: `var(--bg-poke-color-light-${pokemon.types[0].type.name})`}} >
          <div className="card-header text-center">{pokemon.name.toUpperCase()}</div>
          <img src= {pokemon.sprites.front_default} alt='Loading' className='card img-center'/>
          <div className="card-body" >
            <h5 className="card-title text-center">{pokemon.types[0].type.name} Pokemon</h5>
            <p className="card-text text-center">Catched by Aras & Arda</p>
            <img className='col-2' src={PokeballImage} alt=''/>
          </div>
          </div>
          </div>
          
        {
          
          this.state.ShowPokemonDetails && <PokemonDetails Details={this.Details}
           pokemon={this.props.pokemons} key={v4()} /> 
        }

        </div>
        </div>
        )
  }
}

        export default ListPokeCards

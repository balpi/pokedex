import React, { Component } from 'react'
import './Search.css'

export class ListPokeCards extends Component {
  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-3 border '>
               <img src={this.props.sending.sprites["front_default"]} alt='Not Found'/>
                
            </div>
            <div className='col-3 border cardName'>
                <h2>{this.props.sending.name}</h2>
            </div>
            <div className='col-6 CardType'>
                <h4>{this.props.sending.types[0].type.name}</h4>
            </div>
        </div>
        
      </div>
    )
  }
}

export default ListPokeCards

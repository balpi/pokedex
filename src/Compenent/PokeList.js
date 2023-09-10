import React, { Component } from 'react'
import ListPokeCards from './ListPokeCards'

export class PokeList extends Component {
  

  render() {
    return (
      <div  >
        
        <div className='card-group'>
        {this.props.pokem.map(x =>
          <div className='col-4'>
            <ListPokeCards key={x.id} pokemons={x} />
          </div>
          
    )}
    </div>
      </div>
    )
  }
}

export default PokeList

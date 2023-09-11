import React, { Component } from 'react'
import ListPokeCards from './ListPokeCards'


export class PokeList extends Component {
  
  render() {
    
    return (
      
      <div  >
        
        <div className='card-group'>
        {this.props.pokem.map(x =>
          
            
            <ListPokeCards pokemons={x} key={x.id} />
            
          
          
    )}
    </div>
      </div>
    )
  }
}

export default PokeList

import React, { Component } from 'react'
import ListPokeCards from './ListPokeCards'

export class PokeList extends Component {
  

  render() {
    return (
      <div className='container'>
        {console.log(this.props.pokem)}
        <ul>
        {this.props.pokem.map(x =>
          <li>
            <ListPokeCards key={x.id} sending={x} />
          </li>
          
    )}
    </ul>
      </div>
    )
  }
}

export default PokeList

import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <div className='row'>

            <img  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png" alt='' className='col-3' />
            <div className='col-6'>
              <div className='row'>
                <h1 className='text-center '>Aras & Arda Pokedex</h1>
              </div>
              <div className='row'>
                <img src='https://archives.bulbagarden.net/media/upload/thumb/2/20/Legendary_birds.png/375px-Legendary_birds.png'
                alt='' className='col-12' />
              </div>
            </div>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png" alt=' 'className='col-3' />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Compenent/Navbar'
import PokeList from './Compenent/PokeList'
import Footer from './Compenent/Footer'
import './App.css'




export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      total: 0,
      limit: 20,
      offset: 0
    }
    this.getAll = this.getAll.bind(this);
  }



  async getAll() {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon?=${this.state.limit}&offset=${this.state.offset}`);
    const data = await api.json();

    const promises = await data.results.map(async pokemon => {
      const result = await fetch(pokemon.url);
      const res = await result.json();

      return res;
    });

    const results = await Promise.all(promises);

    const pok = [...this.state.pokemons];
    this.setState(prev => ({

      pokemons: [...pok, ...results],
      total: prev.total + results.length,
      offset: prev.offset + 20
    }));

  }
  componentDidMount() {
    this.getAll();

  }

  render() {


    return (
      <div className='container'>
        <div className='row'>
          <Navbar />
        </div>
        <div className='row'>
          
        </div>


        {
          <div className='container' >
            <PokeList key={this.state.offset} pokem={this.state.pokemons} />
          </div>
        }

        <div className=' text-center'>
          <button type='button' onClick={this.getAll} className='btn btn-primary'>Load More</button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App

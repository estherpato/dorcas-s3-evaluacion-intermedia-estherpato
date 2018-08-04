import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import PokemonList from './PokemonList';

class App extends Component {
  

  render() {
    const { pokemonList } = this.props

    return (
      <Fragment>
        <header>
          <h1 className="App-title">my pokemon list</h1>
        </header>
        <main>
          <PokemonList 
          pokemon={pokemonList} 
          />
        </main>
      </Fragment>
    );
  }
}

App.PropTypes = {
  pokemonList: PropTypes.array
}

export default App;

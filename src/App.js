import React, { Component, Fragment } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

class App extends Component {
  render() {
    const { pokemonList } = this.props
    return (
      <Fragment>
        <header>
          <h1 className="App-title">my pokemon list</h1>
        </header>
        <main>
          <PokemonList pokemon={pokemonList} />
        </main>
      </Fragment>
    );
  }
}

export default App;

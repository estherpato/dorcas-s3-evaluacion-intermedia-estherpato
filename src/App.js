import React, { Component, Fragment } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      background: 'PokemonCard__container'
    }   
}

  //callback
  handleClick(event) {
    this.setState((event) => ({
      background: (event.background === 'PokemonCard__container') ? 'PokemonCard__container--click' : 'PokemonCard__container'
    }));
  }

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
          backgroundClass={this.state.background}
          callback={this.handleClick}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;

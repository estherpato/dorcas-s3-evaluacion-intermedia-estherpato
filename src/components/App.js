import React, { Component, Fragment } from 'react';
import './App.css';
import PokemonList from './PokemonList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      background: 'PokemonCard__container'
    }; 

    this.handleClick = this.handleClick.bind(this);
    
}

  //callback
  handleClick() {
    this.setState(() => ({
      background: (this.state.background === 'PokemonCard__container') ? 'PokemonCard__container--click' : 'PokemonCard__container'
    }));
  }

  render() {
    const { pokemonList } = this.props
    const { background } = this.state

    return (
      <Fragment>
        <header>
          <h1 className="App-title">my pokemon list</h1>
        </header>
        <main>
          <PokemonList 
          pokemon={pokemonList} 
          background={background}
          callback={this.handleClick}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;

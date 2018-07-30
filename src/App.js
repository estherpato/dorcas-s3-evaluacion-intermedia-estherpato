import React, { Component, Fragment } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.bgnormal = 'PokemonCard__container'
    this.bgclicked = 'PokemonCard__container--click'
}

  //callback
  handleClick(event) {
    
    if(event.target) {
      this.bgnormal = this.bgclicked;
      console.log('funciono')
    } else {
      this.bgnormal;
    }
    this.forceUpdate();
  }

  render() {
    const { pokemonList } = this.props
    return (
      <Fragment>
<<<<<<< HEAD
        <h1 className="App-title">my pokemon list</h1>
        <PokemonList 
        pokemon={pokemonList}
        callback={this.handleClick}
        backgroundColor={this.bgnormal} />
=======
        <header>
          <h1 className="App-title">my pokemon list</h1>
        </header>
        <main>
          <PokemonList pokemon={pokemonList} />
        </main>
>>>>>>> master
      </Fragment>
    );
  }
}

export default App;

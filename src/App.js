import React, { Component, Fragment } from 'react';
import './App.css';
import PokeList from './components/List.js';

class App extends Component {
  render() {
    return (
      <Fragment>
      <h1>Mi lista de Pokemon</h1>
      <PokeList />
      </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  render() {
    const array = this.props.pokemonList
    return (
      <Fragment>
        <h1>Mi lista de Pokemon</h1>
        <ul>
          {array.map(function (item) {
            return (
              <li>
                id: {item.id}
                name: {item.name}
                types: {item.types}
                evolution: {item.evolution}
                url: {item.url}
              </li>
            )
          })}
        </ul>
      </Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import pokemons from '../index.js';

class PokeList extends Component {
    render() {
        const poke = this.props
        console.log('array', this.props.pokemonList)
        return (
            <li>
            </li>
        );
    }
}

export default PokeList;
import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

class PokemonList extends Component {
    render() {
        const { pokemon } = this.props
        return (
            <ul>
                {pokemon.map(pokemon => 
                <li>
                    <PokemonCard
                    picURL={pokemon.url}
                    name={pokemon.name}
                    types={pokemon.types}
                    />
                </li>)}
            </ul>
        );
    }
}

export default PokemonList;
import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

class PokemonList extends Component {
    render() {
        const { pokemon } = this.props
        return (
            <ul className="PokemonList-wrapper">
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
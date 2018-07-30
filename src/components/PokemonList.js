import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

class PokemonList extends Component {
    render() {
        const { pokemon, backgroundClass, callback } = this.props
        return (
            <ul className="PokemonList-wrapper">
                {pokemon.map(pokemon =>
                    <li
                        onClick={callback}
                        key={pokemon.id}
                    >
                        <PokemonCard
                            picURL={pokemon.url}
                            name={pokemon.name}
                            types={pokemon.types}
                            cardBackground={backgroundClass}
                        />
                    </li>)}
            </ul>
        );
    }
}

export default PokemonList;
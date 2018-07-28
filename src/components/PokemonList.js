import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

class PokemonList extends Component {
    render() {
        const { pokemon, backgroundColor, callback } = this.props
        return (
            <ul className="PokemonList-wrapper">
                {pokemon.map(pokemon =>
                    <li onClick={callback}>
                        <PokemonCard
                            picURL={pokemon.url}
                            name={pokemon.name}
                            types={pokemon.types}
                            cardBackground={backgroundColor}
                        />
                    </li>)}
            </ul>
        );
    }
}

export default PokemonList;
import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

class PokemonList extends Component {
    render() {
        const { pokemon, background, callback} = this.props
        return (
            <ul className="PokemonList-wrapper">
                {pokemon.map(pokemon =>
                    <li
                        key={pokemon.id}
                    >
                        <PokemonCard
                            callback={callback}
                            picURL={pokemon.url}
                            name={pokemon.name}
                            types={pokemon.types}
                            background={background}
                        />
                    </li>)}
            </ul>
        );
    }
}

export default PokemonList;
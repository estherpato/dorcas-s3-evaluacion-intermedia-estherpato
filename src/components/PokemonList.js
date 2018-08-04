import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

class PokemonList extends Component {
    render() {
        const { pokemon } = this.props
        return (
            <ul className="PokemonList-wrapper">
                {pokemon.map(pokemon =>
                    <li
                        key={pokemon.id}
                    >
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

PokemonList.PropTypes = {
    pokemon: PropTypes.array
}

export default PokemonList;
import React, { Component } from 'react';

class PokemonCard extends Component {
    render() {
        const { picURL, name, types } = this.props
        return (
            <div>
                <img src={picURL} alt={`Este es el pokemon ${name}`} />
                <h2>{name}</h2>
                <div>{types}</div>
            </div>
        );
    }
}

export default PokemonCard;
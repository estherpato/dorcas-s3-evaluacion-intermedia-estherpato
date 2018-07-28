import React, { Component } from 'react';
import './PokemonCard.css'

class PokemonCard extends Component {
    render() {
        const {
            picURL,
            name,
            types,
            cardBackground
        } = this.props
        return (
            <div className={cardBackground}>
                <div className="PokemonCard-image__container">
                    <img
                        className="PokemonCard-image"
                        src={picURL}
                        alt={`Este es el pokemon ${name}`}
                    />
                </div>
                <h3 className="PokemonCard-name">{name}</h3>

                <ul className="PokemonCard-types__container">
                    {types.map(type =>
                        <li key={type} className="PokemonCard-types__item">
                            {type}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default PokemonCard;
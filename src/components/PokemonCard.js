import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PokemonCard.css'

class PokemonCard extends Component {
    constructor() {
        super();
    
        this.state = {
          background: 'PokemonCard__container'
        }; 
    
        this.handleClick = this.handleClick.bind(this);  
    }
    
      //callback
      handleClick() {
        this.setState(() => ({
          background: (this.state.background === 'PokemonCard__container') ? 'PokemonCard__container--click' : 'PokemonCard__container'
        }));
      }
    render() {
        const {
            picURL,
            name,
            types,
        } = this.props

        return (
            <div className={this.state.background} onClick={this.handleClick}>
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

PokemonCard.PropTypes = {
    picURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.array
}

export default PokemonCard;
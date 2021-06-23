import React from 'react';
import './pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';


// One Pokemon card. //

const PokeCard = (props) => {
    let imgSrc = `${POKE_API}${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{ props.name} </div>
            <img className="Pokecard-image" src={imgSrc}></img>
            <div className="Pokecard-data">Type: {props.type}</div>
            <div className="Pokecard-data">EXP: {props.exp}</div>
        </div>
    );
}

export default PokeCard;
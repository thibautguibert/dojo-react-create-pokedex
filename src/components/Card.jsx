import React from 'react';
import './card.css';

// bulbasaur = {
//     id: 1,
//     name: "bulbasaur",
//     sprites: {
//         back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
//         front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
//     },
//     types: [
//     "grass", "poison"
// ]
// }

function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <header>
                <h1 className="name">{props.name}</h1 >
                <div className="id">
                    <p>{props.id}</p>
                </div>
            </header>
            <div className="sprite-container">
                <img className="front-sprite" src={props.sprites.front_default} alt="Pokemon qui est relou as fuck" />
                <img className="back-sprite" src={props.sprites.back_default} alt="Poney unijambiste rose à point vert" />
            </div>
            <div className="type-container">
                <div className="type grass">{props.power[0]}</div>
                <div className="type poison">{props.power[1]}</div>
            </div>
        </div>
    );
}

export default Card;
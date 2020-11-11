import React from 'react';
import Card from './Card';
import './pokedex.css';

const kantoPokedex = [
    {
        id: 1,
        name: "bulbasaur",
        sprites: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        },
        power: [
            "grass", "poison"
        ]
    },
    {
        id: 4,
        name: "charmander",
        sprites: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
        },
        power: [
            "fire"
        ]
    },
    {
        id: 7,
        name: "squirtle",
        sprites: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
        },
        power: [
            "water"
        ]
    },
    {
        id: 666,
        name: "sova",
        sprites: {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        power: [
            "ghost", "psychic"
        ]
    },

]

function Pokedex() {
    return (
        <div className="pokedex-container">
            <div>A vous de jouer les gars</div>
            <div>{kantoPokedex.map(pokemon => (
                <Card  {...pokemon} />
            ))}
            </div>
        </div>
    )
}
export default Pokedex;







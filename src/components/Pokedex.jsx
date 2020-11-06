import React from 'react';
import './card.css';
import './pokedex.css';
import Card from './Card';
import axios from 'axios';

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
        types: [
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
        types: [
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
        types: [
            "water"
        ]
    }
];

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            randomDisplay: false,
            randomPokemon: {
                id: 0,
                name: "",
                sprites: {
                    back_default: "",
                    front_default: "",
                    back_shiny: "",
                    front_shiny: ""
                },
                types: [
                    "null", ""
                ]
            }
        }
    }

    getRandomPokemon = () => {
        const random = Math.floor(Math.random() * 150) + 1;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            .then(response => response.data)
            .then(data => {
                this.setState(prevState => {
                    let randomPokemon = { ...prevState.randomPokemon };
                    randomPokemon.types[1] = "";
                    randomPokemon.id = data.id;
                    randomPokemon.name = data.name;
                    randomPokemon.sprites = data.sprites;
                    randomPokemon.types[0] = data.types[0].type.name;
                    if (data.types[1]) {
                        randomPokemon.types[1] = data.types[1].type.name
                    }
                    console.log(randomPokemon);
                    return { randomPokemon };
                })
                this.setState(
                    { randomDisplay: true }
                );
            })
    };

    render() {
        const { randomPokemon } = this.state;
        return (
            <div className="pokedex-container" >
                { kantoPokedex.map(pokemon => <Card key={pokemon.id} {...pokemon} />)}
                < button
                    type="button"
                    className="random"
                    onClick={this.getRandomPokemon}
                > Un pokémon au hasard</button>
                {this.state.randomDisplay ? < Card
                    name={randomPokemon.name}
                    id={randomPokemon.id}
                    sprites={randomPokemon.sprites}
                    types={randomPokemon.types}
                /> : ""}
            </div >
        )
    }
}
export default Pokedex;
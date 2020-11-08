import React from 'react';
import axios from 'axios';
import Card from './Card';
import Navbar from './Navbar';
import './randomPoke.css';

class RandomPoke extends React.Component {
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
        const random = Math.floor(Math.random() * 898) + 1;
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
            <div>
                <Navbar />
                <div className="random-container">
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
                </div>
            </div>
        )
    }
}

export default RandomPoke;
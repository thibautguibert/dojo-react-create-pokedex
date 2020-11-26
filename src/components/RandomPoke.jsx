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
            randomPokemon: []
        }
    }

    componentDidMount() {
        this.getRandomTeam(6);
    }

    AddRandomPokemon = () => {
        const random = Math.floor(Math.random() * 898) + 1;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            .then(response => response.data)
            .then(data => {
                this.setState(prevState => {
                    let newPokemon = {
                        id: 0,
                        name: "",
                        sprites: {
                            back_default: "",
                            front_default: "",
                            back_shiny: "",
                            front_shiny: ""
                        },
                        types: [
                            "", ""
                        ]
                    }
                    newPokemon.id = data.id;
                    newPokemon.name = data.name;
                    newPokemon.sprites = data.sprites;
                    newPokemon.types[0] = data.types[0].type.name;
                    if (data.types[1]) {
                        newPokemon.types[1] = data.types[1].type.name
                    }
                    return { randomPokemon: [...prevState.randomPokemon, newPokemon] };
                })
                this.setState(
                    { randomDisplay: true }
                );
            })
    };

    getRandomTeam = (teamSize) => {
        for (let i = 0; i < teamSize; i++) {
            this.AddRandomPokemon();
        }
    }

    render() {
        const { randomPokemon } = this.state;
        return (
            <div className="random-page">
                <Navbar />
                < button
                    type="button"
                    className="random"
                    onClick={() => {
                        this.setState({ randomPokemon: [] });
                        this.getRandomTeam(6);
                    }}
                > Generate a new team</button>
                <div className="random-container">
                    {randomPokemon.map(pokemon => (
                        < Card
                            key={pokemon.id}
                            name={pokemon.name}
                            id={pokemon.id}
                            sprites={pokemon.sprites}
                            types={pokemon.types}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default RandomPoke;
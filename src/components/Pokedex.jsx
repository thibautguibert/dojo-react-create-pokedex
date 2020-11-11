import React from 'react';
import axios from 'axios';
import './card.css';
import './pokedex.css';
import Card from './Card';
import Navbar from './Navbar';

// const kantoPokedex = [
//     {
//         id: 1,
//         name: "bulbasaur",
//         sprites: {
//             back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
//             front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//             back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
//             front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
//         },
//         types: [
//             "grass", "poison"
//         ]
//     },
//     {
//         id: 4,
//         name: "charmander",
//         sprites: {
//             back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
//             front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
//             back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
//             front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
//         },
//         types: [
//             "fire"
//         ]
//     },
//     {
//         id: 7,
//         name: "squirtle",
//         sprites: {
//             back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
//             front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
//             back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
//             front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
//         },
//         types: [
//             "water"
//         ]
//     }
// ];


class Pokedex extends React.Component {
    state = {
        pokemon: null
    };

    componentDidMount() {
        this.getPokedex();
    };

    getPokedex = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(res => {
                const pokeUrl = res.data.results.map(({ url }) => url);
                console.log(pokeUrl);
                pokeUrl.forEach(pokemon => {
                    axios.get(pokemon)
                        .then(res => res.data)
                        .then(data => {
                            this.setState({
                                pokemon: <Card key={data.id} {...data} />
                            })
                        })
                })
            });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="pokedex-container" >
                </div >
            </div>
        )
    }
}
export default Pokedex;
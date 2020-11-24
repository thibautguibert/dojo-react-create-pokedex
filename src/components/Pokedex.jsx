import React from 'react';
import axios from 'axios';
import './card.css';
import './pokedex.css';
import Card from './Card';
import Navbar from './Navbar';

class Pokedex extends React.Component {
    state = {
        pokedex: [],
        start: 0,
        end: 151,
        gens: {
            gen1: [0, 151],
            gen2: [151, 251],
            gen3: [251, 386],
            gen4: [386, 493],
            gen5: [493, 649],
            gen6: [649, 721],
            gen7: [721, 809],
            gen8: [809, 893]
        }
    };

    componentDidMount() {
        const { start, end } = this.state;
        this.getPokedex(start, end);
    };

    componentDidUpdate(prevProps, prevState) {
        const { start, end } = this.state;
        if (prevState.start !== start) {
            this.getPokedex(start, end);
        }
        console.log("new pokedex is loaded");
    }

    getPokedex = (start, end) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${end - start}&offset=${start}`)
            .then(res => {
                const pokeUrls = res.data.results.map(({ url }) => url);
                this.getAllPokemon(pokeUrls);
            });
    }

    getAllPokemon = (urls) => {
        let pokeList = [];
        for (let i = 0; i < urls.length; i++) {
            axios.get(urls[i])
                .then(response => response.data)
                .then(data => {
                    const newPoke = [{
                        id: data.id,
                        name: data.name,
                        sprites: data.sprites,
                        types: [
                            data.types[0].type.name, ""
                        ]
                    }];
                    if (data.types[1]) {
                        newPoke[0].types[1] = data.types[1].type.name;
                    }
                    pokeList = pokeList.concat(newPoke);
                    if (i === urls.length - 1) {
                        this.setState({
                            pokedex: pokeList
                        })
                    }
                })
        }
    }

    handleChange = (e) => {
        this.setState({
            start: this.state.gens[e.target.value][0],
            end: this.state.gens[e.target.value][1]
        })
    }

    render() {
        const { pokedex } = this.state;
        return (
            <div>
                <Navbar />
                <div className="pokedex" >
                    <select name="generation" id="generation" onChange={this.handleChange}>
                        <option value="gen1">Generation 1 Pokedex (#1 to #151)</option>
                        <option value="gen2">Generation 2 Pokedex (#152 to #251)</option>
                        <option value="gen3">Generation 3 Pokedex (#253 to #386)</option>
                        <option value="gen4">Generation 4 Pokedex (#387 to #493)</option>
                        <option value="gen5">Generation 5 Pokedex (#494 to #649)</option>
                        <option value="gen6">Generation 6 Pokedex (#650 to #721)</option>
                        <option value="gen7">Generation 7 Pokedex (#722 to #809)</option>
                        <option value="gen8">Generation 8 Pokedex (#810 to #893)</option>
                    </select>
                    <div className="pokedex-container">
                        {pokedex.map(pokemon => (
                            < Card
                                key={pokemon.id}
                                name={pokemon.name}
                                id={pokemon.id}
                                sprites={pokemon.sprites}
                                types={pokemon.types}
                            />
                        ))}
                    </div>
                </div >
            </div>
        )
    }
}
export default Pokedex;
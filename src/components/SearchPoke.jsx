import React from 'react';
import './searchPoke.css';
import axios from 'axios';
import Card from './Card';

class SearchPoke extends React.Component {
    constructor() {
        super();
        this.state = {
            searchDisplay: false,
            inputValue: "",
            errorMessage: "",
            searchedPokemon: {
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
            },
        }
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value, errorMessage: "" });
    }

    getPokeFromSearch = () => {
        const { inputValue } = this.state;
        const value = inputValue.toLowerCase();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
            .then(response => response.data)
            .then(data => {
                this.setState(prevState => {
                    let searchedPokemon = { ...prevState.searchedPokemon };
                    searchedPokemon.types[1] = "";
                    searchedPokemon.id = data.id;
                    searchedPokemon.name = data.name;
                    searchedPokemon.sprites = data.sprites;
                    searchedPokemon.types[0] = data.types[0].type.name;
                    if (data.types[1]) {
                        searchedPokemon.types[1] = data.types[1].type.name
                    }
                    console.log(this.state);
                    return { searchedPokemon };
                })
                this.setState(
                    { searchDisplay: true }
                )
            })
            .catch(error => {
                console.log(error.response)
                this.setState({ errorMessage: "Nous n'avons pas trouvé ce pokémon... Essayez le nom en anglais" })
            });


    }


    render() {
        const { searchedPokemon } = this.state;
        return (
            <div className="search-container" >
                <div className="input-container">
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="enter a pokemon name"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    <button
                        type="button"
                        className="search-btn"
                        onClick={this.getPokeFromSearch}
                    >🔍 </button>
                    <p className="error-message">
                        {this.state.errorMessage}
                    </p>
                </div>
                {this.state.searchDisplay ? < Card
                    name={searchedPokemon.name}
                    id={searchedPokemon.id}
                    sprites={searchedPokemon.sprites}
                    types={searchedPokemon.types}
                /> : ""}
            </div>
        )
    }
}

export default SearchPoke;
import React from 'react';
import './searchPoke.css';

class SearchPoke extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            errorMessage: "",
        }
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value, errorMessage: "" });
    }

    // getPokeFromSearch = () => {
    //     const {inputValue} = this.state;

    //     }

    render() {
        return (
            <div className="search-container">
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
                >🔍 </button>
            </div>
        )
    }
}

export default SearchPoke;
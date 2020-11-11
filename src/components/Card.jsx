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

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isShiny: false
        }
    };

    handleClick() {
        this.setState({ isShiny: !this.state.isShiny })
        console.log(this.state.isShiny)
    }

    render() {

        return (
            <div className="card">
                <header>
                    <h1 className="name">{this.props.name}</h1 >
                    <div className="id">
                        <p>{this.props.id}</p>
                    </div>
                </header>
                <div className="sprite-container">
                    <img className="front-sprite" src={this.state.isShiny ? this.props.sprites.front_shiny : this.props.sprites.front_default} alt="Pokemon qui est relou as fuck" />
                    <img className="back-sprite" src={this.state.isShiny ? this.props.sprites.back_shiny : this.props.sprites.back_default} alt="Poney unijambiste rose à point vert" />
                </div>
                <div className="type-container">
                    <div className={`type ${this.props.power[0]}`}>{this.props.power[0]}</div>
                    <div className={this.props.power[1] ? "type " + this.props.power[1] : "none"}> {this.props.power[1]}</div>
                    <button className={this.state.isShiny ? "shiny-btn active" : "shiny-btn"} onClick={this.handleClick}>✨</button>
                </div>
            </div >
        );
    }
}

export default Card;
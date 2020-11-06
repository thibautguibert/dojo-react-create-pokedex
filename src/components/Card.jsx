import React from 'react';
import './card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        const newActive = !this.state.active;
        this.setState({ active: newActive });
    }

    render() {
        const { active } = this.state;
        const { name, id, sprites, types } = this.props;
        return (

            <div className="card">
                <header>
                    <p className="name">{name}</p>
                    <p className="id">{id}</p>
                </header>
                <figure className="sprite-container">
                    <img
                        src={active ? sprites.front_shiny : sprites.front_default}
                        alt="front sprite"
                        className="front-sprite" />
                    <img
                        src={active ? sprites.back_shiny : sprites.back_default}
                        alt="back sprite"
                        className="back-sprite" />
                </figure>
                <button
                    type="button"
                    className={active ? "shiny-btn active" : "shiny-btn"}
                    onClick={this.handleClick}
                >✨</button>
                <div className="type-container">
                    <div className={"type " + types[0]}>{types[0]}</div>
                    <div className={types[1] ? "type " + types[1] : "none"}>{types[1]}</div>
                </div>
            </div>
        )
    }
}

export default Card;
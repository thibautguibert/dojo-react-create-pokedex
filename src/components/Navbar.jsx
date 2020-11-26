import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component {
    state = {
        xcross: false
    }

    componentDidUpdate(prevProps, prevState) {
        const { xcross } = this.state;
        if (prevState.xcross !== xcross) {
            this.scrollLock();
        }
    }

    handleBurgerClick = () => {
        const { xcross } = this.state;
        this.setState({ xcross: !xcross })
    }

    scrollLock = () => {
        const { xcross } = this.state;
        const scrollPos = document.body;
        const screenW = window.screen.width;
        if (xcross === true && screenW < 758) {
            scrollPos.style.overflowY = "hidden";
        } else {
            scrollPos.style.overflowY = "initial";
        }
    };
    render() {
        const { xcross } = this.state;
        return (
            <div className="navbar">
                <h1>PokeApp</h1>
                <ul className="ul-desktop">
                    <Link to="/">Pokédex</Link>
                    <Link to="/random-team">Random Team</Link>
                    <Link to="/search">Search a Pokémon</Link>
                </ul>
                <ul className={xcross ? "ul-mobile active" : "ul-mobile"}>
                    <Link to="/">Pokédex</Link>
                    <Link to="/random-team">Random Team</Link>
                    <Link to="/search">Search a Pokémon</Link>
                </ul>
                <button
                    className={xcross ? "Burger xcross" : "Burger"}
                    onClick={this.handleBurgerClick}
                >
                    <div className="bar" id="first-bar"></div>
                    <div className="bar" id="second-bar"></div>
                    <div className="bar" id="third-bar"></div>
                </button>
            </div >
        )
    }
}

export default Navbar;
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <h1>PokeApp</h1>
            <ul>
                <Link to="/">Pokédex</Link>
                <Link to="/random-team">Random Team</Link>
                <Link to="/search">Search a Pokémon</Link>
            </ul>
        </div>
    )
}

export default Navbar;
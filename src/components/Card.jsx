import './card.css';

function Card() {
    return (
        <div className="card">
            <header>
                <p className="name">Venusaur</p>
                <p className="id">n°3</p>
            </header>
            <figure className="sprite-container">
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                    alt="front sprite"
                    className="front-sprite" />
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
                    alt="back sprite"
                    className="back-sprite" />
            </figure>
            <div className="type-container">
                <div className="type grass">Grass</div>
                <div className="type poison">Poison</div>
            </div>
        </div>
    )
}

export default Card;
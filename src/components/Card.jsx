import './card.css';

function Card(props) {
    return (
        <div className="card">
            <header>
                <p className="name">{props.name}</p>
                <p className="id">{props.id}</p>
            </header>
            <figure className="sprite-container">
                <img
                    src={props.sprites.front_default}
                    alt="front sprite"
                    className="front-sprite" />
                <img
                    src={props.sprites.back_default}
                    alt="back sprite"
                    className="back-sprite" />
            </figure>
            <div className="type-container">
                <div className={"type " + props.types[0]}>{props.types[0]}</div>
                <div className={props.types[1] ? "type " + props.types[1] : "none"}>{props.types[1]}</div>
            </div>
        </div>
    )
}

export default Card;
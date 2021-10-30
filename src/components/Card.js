import React from 'react';
import './card.css';

// 'nom, image, poids, taille'

const Card = (props) => {

  return (
    <div className="card">
      <h1 className="namePokemon">{props.name}</h1>
      <img className="firstImage" src={props.image} alt="pokemon" />
      <h2 className="poid">{props.weight} </h2>
      <h3 className="taille">{`Taille: ${props.height}`}</h3>
    </div >

  )
}

export default Card;

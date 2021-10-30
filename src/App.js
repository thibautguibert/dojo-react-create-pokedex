import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

// const cardNumber1 = {
//   title: "numéro 1",
//   number: 1,
// }
// const cardNumber2 = {
//   title: "numéro 2",
//   number: 2,
// }

// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'

function App() {
  const [pokemon, setPokemon] = useState({
    name: '',
    sprites: {
      front_default: '',
    },
    weight: 0,
    height: 0,
  });
  const [pokeInput, setPokeInput] = useState("")
  const [newPoke, setNewPoke] = useState({})

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((info) => {
      setPokemon(info.data);
    })
  }, []);
  console.log(pokemon);

  const newGetPokemon = (name) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((info) => setNewPoke({
      name: info.data.name,
      height: info.data.height,
      weight: info.data.weight,
      image: info.data.sprites.front_default,
    }))
  }

  return (
    <div className="App">
      <div>
        <input value={pokeInput} onChange={(e) => setPokeInput(e.target.value)} />
        <button onClick={() => newGetPokemon(pokeInput)}>Create Card</button>
      </div>
      <Card name="Tadmorv" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png" weight="280" height="0.2" />
      <Card name="Evee" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png" weight="2800" height="20" />
      <Card name="Dracofeu" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" weight="1.5" height="15" />
      <Card name="Bulbizar" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" weight="0.2" height="3" />
      <Card name={pokemon.name} image={pokemon.sprites.front_default} weight={pokemon.weight} height={pokemon.height} />
      <Card name={newPoke.name} image={newPoke.image} weight={newPoke.weight || "pas de poids"} height={newPoke.height} />
    </div>
  );
}

export default App;

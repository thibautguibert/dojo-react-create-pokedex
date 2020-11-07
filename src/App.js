import './App.css';
import Card from './components/Card';

const ventin = {
  id: 69,
  name: "valentin bg",
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  types: [
    "fire"
  ]
}
const bulbasaur = {
  id: 1,
  name: "thib bg",
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  types: [
    "grass", "poison"
  ]
};
const charmander = {
  id: 4,
  name: "charmander",
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  types: [
    "fire"
  ]
}

const squirtle = {
  id: 7,
  name: "squirtle",
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  types: [
    "water"
  ]
}

function App() {
  return (
    <div className="App">
      <p>valentin trop fort</p>
      <Card id={bulbasaur.id} name={bulbasaur.name} sprites={bulbasaur.sprites} power={bulbasaur.types} />
      <Card id={charmander.id} name={charmander.name} sprites={charmander.sprites} power={charmander.types} />
      <Card id={ventin.id} name={ventin.name} sprites={ventin.sprites} power={ventin.types} />
      <Card id={squirtle.id} name={squirtle.name} sprites={squirtle.sprites} power={squirtle.types} />
    </div>
  );

}

export default App;

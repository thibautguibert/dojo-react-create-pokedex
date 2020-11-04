import './App.css';
import Card from './components/Card';

const bulbasaur = {
  id: 1,
  name: "bulbasaur",
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
  },
  types: [
    "grass", "poison"
  ]
}

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

function App() {
  return (
    <div className="App">
      <p>Let start the dojo!</p>
      <Card
        id={bulbasaur.id}
        name={bulbasaur.name}
        sprites={bulbasaur.sprites}
        types={bulbasaur.types}
      />
      <Card
        id={charmander.id}
        name={charmander.name}
        sprites={charmander.sprites}
        types={charmander.types} />
    </div>
  );
}

export default App;

import './App.css';
import Pokedex from './components/Pokedex';
import RandomPoke from './components/RandomPoke';


function App() {
  return (
    <div className="App">
      <p>Let start the dojo!</p>
      <Pokedex />
      <RandomPoke />
    </div>
  );
}

export default App;

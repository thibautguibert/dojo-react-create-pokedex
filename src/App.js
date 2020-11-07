import './App.css';
import Pokedex from './components/Pokedex';
import RandomPoke from './components/RandomPoke';
import SearchPoke from './components/SearchPoke';


function App() {
  return (
    <div className="App">
      <p>Let start the dojo!</p>
      <Pokedex />
      <RandomPoke />
      <SearchPoke />
    </div>
  );
}

export default App;

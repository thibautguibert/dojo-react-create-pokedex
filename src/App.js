import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Pokedex from './components/Pokedex';
import RandomPoke from './components/RandomPoke';
import SearchPoke from './components/SearchPoke';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route path="/random-team" component={RandomPoke} />
          <Route path="/search" component={SearchPoke} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

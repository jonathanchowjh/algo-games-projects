import './App.css';
import {
  Route, Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages/Header'
import TicTacToe from './pages/TicTacToe'

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ab_tic_tac_toe" component={TicTacToe} />
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;

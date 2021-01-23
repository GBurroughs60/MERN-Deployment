import './App.css';
import Main from './views/Main';
import { Router } from "@reach/router";
import Create from './views/Create';
import Display from './views/Display';

function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/pirates"/>
          <Create path="/pirates/new" />
          <Display path="/pirates/:id" />
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
import BootstrapPage from './routes/bootstrap';
import 'react-bootstrap';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <BootstrapPage />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Navi from './layouts/Navi';
import Welcome from './layouts/Welcome';
import Dashboard from './pages/Dashboard';
import JobAdvertisements from './pages/JobAdvertisements';
import Candidates from './pages/Candidates';
import Employers from './pages/Employers';

function App() {
  return (
    <Router>
    <div className="App">
        <Navi/>
        <Welcome/>
        <Switch>
          <Route exact path="/">
              <Dashboard/>
          </Route>
          <Route path="/jobadvertisements">
              <JobAdvertisements/>
          </Route>
          <Route path="/candidates">
              <Candidates/>
          </Route>
          <Route path="/employers">
              <Employers/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

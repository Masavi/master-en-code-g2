import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/ejemplo" className="navbar__link">Ejemplo</Link>
        <Link to="/peticiones" className="navbar__link">Peticiones</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <h1>Inicio</h1>
        </Route>
        <Route exact path="/ejemplo">
          <h1>Ejemplo</h1>
        </Route>
        <Route exact path="/peticiones">
          <h1>Peticiones</h1>
          <h2>useEffect</h2>
        </Route>
      </Switch>
    </Router>
  );
}

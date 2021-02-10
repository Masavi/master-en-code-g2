import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import Routes from './Routes';
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
        <Routes />
      </Switch>
    </Router>
  );
}

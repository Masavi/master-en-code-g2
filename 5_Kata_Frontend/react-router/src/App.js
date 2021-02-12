import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  // Link
} from "react-router-dom";
import Routes from './Routes';
import './App.scss';
import NavbarComponent from './components/NavbarComponent';

export default function App() {
  // const id = 7;

  return (
    <Router>
      <NavbarComponent />
      {/* <nav className="navbar">
        <Link to="/" className="navbar__link">Home</Link>
        <Link to="/ejemplo" className="navbar__link">Ejemplo</Link>
        <Link to={`/autor/${id}`} className="navbar__link">Autor</Link>
        <Link to="/peticiones" className="navbar__link">Peticiones</Link>
      </nav> */}
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

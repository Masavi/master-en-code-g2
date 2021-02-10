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
        <Link className="navbar__link">Home</Link>
        <Link className="navbar__link">Ejemplo</Link>
        <Link className="navbar__link">Peticiones</Link>
      </nav>
    </Router>
  );
}

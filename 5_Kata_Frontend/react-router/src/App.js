import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  // Link
} from "react-router-dom";
import Routes from './Routes';
import './App.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <main className="container mt-4">
          <Routes />
        </main>
      </Switch>
    </Router>
  );
}

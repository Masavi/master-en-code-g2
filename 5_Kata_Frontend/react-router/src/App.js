import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Routes from './Routes';
import NavbarComponent from "./components/NavbarComponent";

export default function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <main className="container mt-4">
          <Routes />
        </main>
      </Switch>
    </Router>
  );
}

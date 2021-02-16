import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Routes from './Routes';
import NavbarComponent from "./components/NavbarComponent";

export default function App() {
  const [shows, setShows] = useState([]);

  return (
    <Router>
      <NavbarComponent setShows={setShows} />
      <Switch>
        <main className="container mt-4">
          <Routes shows={shows} />
        </main>
      </Switch>
    </Router>
  );
}

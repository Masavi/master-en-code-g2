import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import Signup from './views/Signup';
import Profile from './views/Profile';
import Login from './views/Login';
import Navbar from './components/Navbar';

export default function Routes() {
    return (
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/profile/:id" component={Profile}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </Router>
    );
}


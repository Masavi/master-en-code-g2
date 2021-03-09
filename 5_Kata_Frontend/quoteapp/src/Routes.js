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
import Qoute from './views/Qoute';
import { Redirect } from 'react-router-dom';

const Logout = () => {
    window.localStorage.removeItem('token');
    return <Redirect to="/"/>;
}

export default function Routes() {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/profile/:id" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/qoute" component={Qoute}/>
            <Route exact path="/logout" component={Logout}/>
        </Switch>
    </Router>
    );
}


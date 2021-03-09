import React from 'react';
import { Link } from 'react-router-dom';
import payload from '../../utils/payload';

export default function Navbar() {
    const user = payload();
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">QUOTE APP</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            { user 
            ?
                <div className="navbar-nav">
                    <Link className="nav-link" to="/qoute">Bienvenido {user.email}!!</Link>
                    <Link className="nav-link" to="/logout">Cerrar Sesión</Link>
                </div>
            :   
                <div className="navbar-nav">
                    <Link className="nav-link" to="/login">Inicio de sesión</Link>
                    <Link className="nav-link" to="/signup">Registro</Link>
                </div>
            }
            </div>
        </div>
    </nav>
);
}
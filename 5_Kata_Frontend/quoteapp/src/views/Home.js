import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                    <Link className="nav-link" to="#">Features</Link>
                    <Link className="nav-link" to="#">Pricing</Link>
                    <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                </div>
                </div>
            </div>
        </nav>
        
    );
};
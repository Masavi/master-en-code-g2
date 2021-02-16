import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import './NavbarComponent.scss';
import tv from '../assets/tv.svg';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar color="faded" dark style={{
        backgroundColor: '#9256b5',
      }}>
        <NavbarBrand className="mr-auto">
          <Link style={{
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }} to="/">
            <img style={{ height: '32px', marginRight: '8px' }} src={tv} alt="DEVFlix Logo"/>
            <span id="logo-text" style={{ paddingTop: '4px', fontWeight: 'bold' }}>DEVFlix</span>
          </Link>
        </NavbarBrand>
        <input
          id="navbar-search"
          style={{ width: "50%" }}
          type="text"
          placeholder="Buscar series" />
        <button
          style={{
            color: 'white',
            backgroundColor: '#683d82',
          }}
          type="button">
            Buscar
        </button>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
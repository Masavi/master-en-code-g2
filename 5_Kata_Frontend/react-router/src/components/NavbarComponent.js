import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import './NavbarComponent.scss';
import tv from '../assets/tv.svg';

const NavbarComponent = ({ setShows }) => {
  const [search, setSearch] = useState('');

  const getShows = async () => {
    if (search.length < 2) return alert('¡Llena el campo!');
    const SEARCH_SHOWS = `http://api.tvmaze.com/search/shows?q=${search}`;
    const { data } = await axios.get(SEARCH_SHOWS);
    setShows(data);
  }

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
          onChange={(e) => setSearch(e.target.value)}
          id="navbar-search"
          style={{ width: "50%" }}
          type="text"
          placeholder="Buscar series" />
        <button
          onClick={getShows}
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

NavbarComponent.propTypes = {
  setShows: PropTypes.func.isRequired,
}

export default NavbarComponent;
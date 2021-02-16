import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
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
            <span style={{ paddingTop: '4px', fontWeight: 'bold' }}>DEVFlix</span>
          </Link>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
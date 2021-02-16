import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Peticiones from './components/Peticiones';
// import Autor from './components/Autor';
import Home from './components/Home';

function Routes({ shows }) {
  return (
    <>
      <Route exact path="/">
        <Home shows={shows} />
      </Route>
    </>
  )
}

Routes.propTypes = {
  shows: PropTypes.array.isRequired,
}

export default Routes;
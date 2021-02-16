import React from 'react';
import { Route } from 'react-router-dom';
// import Peticiones from './components/Peticiones';
// import Autor from './components/Autor';
import Home from './components/Home';

function Routes() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
    </>
  )
}
export default Routes;
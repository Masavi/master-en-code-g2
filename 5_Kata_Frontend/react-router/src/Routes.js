import React from 'react';
import { Route } from 'react-router-dom';
import Peticiones from './components/Peticiones';
import Autor from './components/Autor';

function Routes() {
  return (
    <>
      <Route exact path="/">
        <div className="container pt-4">
          <h1>Inicio</h1>
        </div>
      </Route>
      <Route exact path="/ejemplo">
        <h1>Ejemplo</h1>
      </Route>
      <Route exact path="/autor/:idAutor">
        <Autor />
      </Route>
      <Route exact path="/peticiones">
        <Peticiones />
      </Route>
    </>
  )
}
export default Routes;
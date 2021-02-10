import { Route } from 'react-router-dom';
import Peticiones from './components/Peticiones';

function Routes() {
  return (
    <>
      <Route exact path="/">
        <h1>Inicio</h1>
      </Route>
      <Route exact path="/ejemplo">
        <h1>Ejemplo</h1>
      </Route>
      <Route exact path="/peticiones">
        <Peticiones />
      </Route>
    </>
  )
}
export default Routes;
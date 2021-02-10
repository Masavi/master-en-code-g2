import { Route } from 'react-router-dom';

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
        <h1>Peticiones</h1>
        <h2>useEffect</h2>
      </Route>
    </>
  )
}
export default Routes;
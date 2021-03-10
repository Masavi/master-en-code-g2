/*
  El Contexto debe devolver dos cosas:

  1) El contexto, que es quien contiene los datos
     que vamos a compartir con otros componentes
  2) El proveedor (PROVIDER), que es un componente que va a
     envolver a todos aquellos componentes que
     pueden consumir los datos de el contexto.
  
  Nota: Quien hace uso de un contexto y utiliza sus datos
        se conoce como un CONSUMIDOR (CONSUMER)
*/

import { createContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const name = 'Karla';
  const lastName = 'Solares';

  const state = { name, lastName };

  return (
    <ThemeContext.Provider value={state}>
      {children}
    </ThemeContext.Provider>
  );
}
 
export {
  ThemeContext,
  ThemeProvider,
}
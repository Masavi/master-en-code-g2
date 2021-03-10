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

import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const lightTheme = {
    mode: 'light',
    backgroundColor: 'white',
    color: 'black',
  }

  const darkTheme = {
    mode: 'dark',
    backgroundColor: 'black',
    color: 'white',
  }

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme.mode === 'light') {
      return setTheme(darkTheme);
    }
    return setTheme(lightTheme);
  }

  const state = [
    { name: 'Karla', lastName: 'Solares', theme }, // Atributos
    { toggleTheme }, // Métodos
  ];

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
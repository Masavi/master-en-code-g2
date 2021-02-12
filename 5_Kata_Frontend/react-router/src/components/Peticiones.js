import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TacoComponent from './TacoComponent';

export default function Peticiones() {
  const [taco, setTaco] = useState({});
  const tacoAPI = 'http://taco-randomizer.herokuapp.com/random/';

  async function getTaco() {
    try {
      const response = await axios.get(tacoAPI);
      setTaco(response.data); 
    } catch (error) {
      alert("Ocurrió un error al traer el taco!!!!");
    }
  }

  useEffect(() => {
    setTimeout(getTaco, 1500);
  }, []);

  return (
    <>
      <h1>Peticiones</h1>
      <h2>useEffect</h2>
      <h3>- TacoFancy API -</h3>
      { taco.condiment
        ? <TacoComponent taco={taco} /> 
        : <span>Estamos eligiendo el taco ideal para ti</span>
      }
    </>
  )
}

import { useState, useEffect } from 'react';
import axios from 'axios';

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
      <p> {
        taco.condiment
          ? taco.condiment.name
          : 'Estamos eligiendo tu taco ideal...'
      } </p>
    </>
  )
}

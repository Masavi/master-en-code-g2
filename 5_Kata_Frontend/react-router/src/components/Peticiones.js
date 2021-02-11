import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Peticiones() {
  const [taco, setTaco] = useState({});

  /*
    useEffect (escrito así) se ejecuta siempre
    después de renderizar (retornar) nuestro
    componente
  */
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTexto("Pasaron 3 segundos!!!");
  //   }, 3000)
  // })

  /*
    useEffect (escrito usando DEPENDENCIAS [])
    se ejecuta UNA SOLA VEZ al cargar el componente
    esto es el equivalente a
    componentDidMount
  */
  // useEffect(
  //   () => {
  //     console.log("Hola desde useEffect :}")
  //   },
  //   [],
  // );

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
    getTaco();
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

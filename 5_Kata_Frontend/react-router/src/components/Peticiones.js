import { useState, useEffect } from 'react';

export default function Peticiones() {
  const [texto, setTexto] = useState("");

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
  useEffect(
    () => {
      console.log("Hola desde useEffect :}")
    },
    [],
  );

  return (
    <>
      <h1>Peticiones</h1>
      <h2>useEffect</h2>
      <input
        type="text"
        onChange={(e) => setTexto(e.target.value)} />
      <span>{ texto }</span>
    </>
  )
}

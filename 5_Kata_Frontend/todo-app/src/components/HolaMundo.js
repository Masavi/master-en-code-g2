import { useState } from 'react';

function HolaMundo(props) {
  // Para manejar el estado en una función, usamos el hook 'useState'
  const [texto, setTexto] = useState(props.texto);
  const [edad, setEdad] = useState(0);

  console.log('✅', props);

  return (
    <>
      <h1> Componente HolaMundo - Edad {edad} </h1>
      <h2> {texto} </h2>
      <input
        placeholder="¡Cambia el texto!"
        type="text"
        onChange={ e => setTexto(e.target.value) }
      />
      <input
        placeholder="¡Cambia la edad!"
        type="number"
        onChange={ e => setEdad(e.target.value) }
      />
    </>
  )
}

export default HolaMundo;
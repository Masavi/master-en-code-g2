import React from 'react';
import { useParams } from 'react-router-dom';

function Autor() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Autor</h1>
      <h2>Estoy en una URL dinámica!</h2>
      <h3>Mostrando el autor {params.idAutor}</h3>
    </>
  )
}

export default Autor;
// Cumleaños de Armando 8 diciembre

// 📲 Si tengo dinero

// Normalmente cuando las promesas no se cumplen
// viene con una razón (pretexto)

// En forma de constante
const promesaCumple = new Promise((resolve, reject) => {
  const dinero = Math.floor(Math.random() * 1000);
  console.log('Esperando al cumple de Armando...');

  setTimeout(() =>
    dinero >= 500
      ? resolve('Feliz Cumpleaños 📲') // true
      : reject('No junté el dinero 🙃') // false
  , 3000)
});

// console.log(promesaCumple);

promesaCumple
  .then(result => console.log(result))
  .catch(error => console.log(error));

// En forma de función
const MyFunction = (dinero) => {
  return new Promise((resolve, reject) => {
    console.log('Esperando al cumple de Armando...');

    setTimeout(() =>
      dinero >= 500
        ? resolve('Feliz Cumpleaños 📲') // true
        : reject('No junté el dinero 🙃') // false
    , 3000)
  });
}


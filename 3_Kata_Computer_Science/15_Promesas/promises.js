const edad = 9;

// const promesa = new Promise((resolve, reject) => {
//   if (edad >= 18) resolve("Eres mayor de edad")
//   reject("No eres mayor de edad");
// });

// promesa
//   .then((mensaje) => {
//     console.log("Este es el mensaje, se cumplio la promesa!:")
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.log("Este es el error:")
//     console.log(error);
//   })
  // Si necesitas ejecutar algo adicional después de resolver o rechazar una promesa
  // .finally(() => {
  //   console.log('Finally!');
  // })

/*
  Ejemplo de Promesa con número aleatorio
*/

const numberPromise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
    number > 5
      ? resolve(number)
      : reject(new Error('Menor a 5 🚫'));
  }, 1000)
});

numberPromise
  .then(number => console.log(number))
  .catch(error => console.log(error));
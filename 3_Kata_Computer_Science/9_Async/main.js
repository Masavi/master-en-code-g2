console.log(1);
setTimeout(() => {
  console.log(2);
}, 5000);
// Cuello de botella
for(let i = 0; i <= 9999999999; i++);
console.log(3);

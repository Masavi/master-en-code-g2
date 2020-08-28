var cuentas = [
  { nombre: 'Mali', saldo: 300, password: '123' },    // 1
  { nombre: 'Gera', saldo: 301, password: 'abc' },    // 2
  { nombre: 'Maui', saldo: 199.50, password: '42' },  // 3
];

// Elegir una cuenta
var cuentaElegidaEnTexto = prompt("Elige una cuenta: 1, 2 o 3");
var cuentaElegida = parseInt(cuentaElegidaEnTexto);

if (cuentaElegida === 1 || cuentaElegida === 2 || cuentaElegida === 3) {
  var password = prompt("Introduce el password de tu cuenta:")

  if (cuentaElegida === 1) {
    if (password === '123') {
      var operacionElegidaEnTexto = prompt("Elige la operación a realizar: 1 - Consultar saldo 2 - Ingresar 3 - Retirar");
      var operacionElegida = parseInt(operacionElegidaEnTexto);
      if (operacionElegida === 1 || operacionElegida === 2 || operacionElegida === 3) {
        if (operacionElegida === 1) {
          var saldo = cuentas[0].saldo;
          alert("Tu saldo es de " + saldo);
        }

        if (operacionElegida === 2) {
          var saldo = cuentas[0].saldo;
          var montoIngresadoEnTexto = prompt("Introduce el monto a ingresar");
          var montoIngresado = parseInt(montoIngresadoEnTexto);
          var nuevoSaldo = saldo + montoIngresado;
          if (nuevoSaldo <= 990) {
            cuentas[0].saldo = nuevoSaldo;
            alert("Tu nuevo saldo es de..." + nuevoSaldo);
          } else {
            alert("No puedes superar el límite superior...");
          }
        }

        if (operacionElegida === 3) {

        }
      } else {
        alert("debes escoger una operacion correcta...");
      }
    } else {
      alert("password incorrecto");
    }
  }
  
  // if (cuentaElegida === 2) {
  //   if (password === 'abc') {

  //   } else {
  //     alert("password incorrecto");
  //   }
  // }

  // if (cuentaElegida === 3) {
  //   if (password === '42') {

  //   } else {
  //     alert("password incorrecto");
  //   }
  // }
}
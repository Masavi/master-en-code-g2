// TODO: Ver ejemplos de una pila.

/* let llaves_de_apertura = 4
let llaves_de_cierre = 3
| | | | |
| | | |

|

{
   (

   ) {
        {
            {

            }
        }
        {

        }
        (
}; 

*/


// PUSH : Agregar elementos al final.


const pila = [];
console.log(pila.push('Federico'));

console.log(pila.push('Alfredo'));

console.log(pila.push('Alexis'));

console.log(pila);

console.log(pila.pop());
console.log(pila);

console.log(pila.pop());
console.log(pila);

console.log(pila.pop());
console.log(pila);

console.log(pila); 

/* const pila = [];
const text = `{}`;
// for (const i =0; i<text.length; i++)
// letter = text [i];
// ¿Están balanceados los paréntesis en text?
let balance = true;
for (const letter of text) {
    if(letter === '{'){
        pila.push(letter);
    } else if(letter === '}') {
        if(pila.length === 0) balance = false;
        pila.pop();
    }
}
// (condicion) 
// ? (en caso de ser verdadero) 
//: (en caso de ser falso)
pila.length === 0 && balance === true
? console.log('Todo está balanceado') 
: console.log(`No está balanceada mi pila`);
 */
// TODO: Implementación de la pila.

class Stack {
    constructor(){
        this.count = 0;
        this.storage = {};
    }
    push(nuevoElemento){ // agregar elementos
        // this.storage.nombre = 'Rayas';
        // this.storage['nombre'] = 'Rayas';
        // const propiedad = 'nombre';
        // this.storage[propiedad] = 'Rayas';
        
        this.count++;
        console.log('count', this.count);
        this.storage[this.count] = nuevoElemento;
        
        return this.count;
    }
    pop(){// pop te trae el último elemento que agregaste y lo elimina
        if(this.count === 0) {
            return null;
        }
        const deleteElement = this.storage[this.count];
        delete this.storage[this.count];
        this.count--;
        return deleteElement;
    }
    length(){ // tamaño

    }
    peek(){ // peek te trae el último elemento que agregaste

    }
}

const miPila = new Stack();
console.log(miPila.push('Federico'));

console.log(miPila.push('Alfredo'));

console.log(miPila.push('Alexis'));

console.log(miPila.storage);

console.log(miPila.pop());
console.log(miPila.storage);

console.log(miPila.pop());
console.log(miPila.storage);

console.log(miPila.pop());
console.log(miPila.storage);

console.log(miPila.storage); 
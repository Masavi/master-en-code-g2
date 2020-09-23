// El nodo es la información del elemento y su apuntador(o enlace) al siguiente elemento. 
class Node{
    constructor(data){
        // en data guardamos cualquier objeto que queremos
        this.data = data;
        // es quien nos indica el siguiente nodo, por defecto esta es nulo.
        this.next = null;
    }
}

// Linked list

// Una lista ligada debe de tener una cabecera (head)
// Nos va a indicar el inicio de la lista.

// El tamaño de la lista (length)

// Las listas tienen dos comportamientos esenciales,
// insertar (add)
// borrar (delete)

class LinkedList{
    // estas son las propiedades de mi lista
    constructor() {
        this.head = null;
        this.length = 0;
    }
    isEmpty() {
        return this.head === null;
    }
    // estos son los métodos o comportamientos de mi lista
    addAtEnd(data){
        console.log('add ' + data);
       const node = new Node(data); // { data: data, next : null }
       if(this.head === null) {
        this.head = node;
       } else { // en este else ya sabeos que existe this.head;
            let currentNode = this.head;
            // while: mientras (condicion: se cumpla la condicion) { hace esto }
            while(currentNode.next) { // verifico si next tiene un nodo
                currentNode = currentNode.next; // sustituyo el node que vive en next a mi nodo actual
            }
            // cuando next sea nulo, entonces sale del while y continua con el resto del codigo
            currentNode.next = node;
       }
       
       this.length++;
    }
    addAtStart() {
        
    }
    get(index){
        // 0, indice mayor
        if(this.head === null || index > this.length) {
            return null;
        } else {
            // 1 -> 2 ->3
            let counter = 1;
            let currentNode = this.head;
            while(counter !== index) {
                counter++;
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }

    delete(data){
        let currentNode = this.head;
        let previousNode = null;
        if(currentNode.data === data) {
            this.head = this.currentNode.next;
        } else {
            while(currentNode.data !== data && currentNode.next !== null) {
                previousNode = currentNode
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    }
}

const listaDeAlumnos = new LinkedList();

listaDeAlumnos.add('Cesar');

listaDeAlumnos.add('Juan Camilo');

listaDeAlumnos.add('Marlon');

listaDeAlumnos.add('Ulma');
 
listaDeAlumnos.add('Margarito');

console.log(listaDeAlumnos);
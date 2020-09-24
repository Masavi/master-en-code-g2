// TODO: Implementación de la cola.

class Queue {
    constructor(){
        this.collection = [];
    }
    enqueue(item){ // encolar o agregar a la cola ()
        this.collection.push(item);
        return this.collection.length;
    }
    dequeue() { // sacar primer elemento de la cola
        return this.collection.shift();
    }
    length(){ // tamaño de la cola
        return this.collection.length;
    }
    isEmpty(){ // está vacia la cola
        return this.collection.length === 0;
    }
    front(){ // traer el peek o primer elemento
        return this.collection[0];
    }
}
// TODO: Ver ejemplos de una cola.

const filaDeAsesorias = new Queue();

// cuando arreglé mis asesorías
filaDeAsesorias.enqueue('Federico');
filaDeAsesorias.enqueue('Gera');
filaDeAsesorias.enqueue('César');
filaDeAsesorias.enqueue('Keneth');

// Aquí estoy esperando a que entren a la llamada, pero quien es el primero?

setInterval(function() {
    if(!filaDeAsesorias.isEmpty()){
        console.log('Atendiendo a ', filaDeAsesorias.dequeue());
        console.log('Cuantos quedan por atender', filaDeAsesorias.length());
        console.log('Esperando a ', filaDeAsesorias.front());
    } else {
        console.log('Pase con la recepcionista a agendar asesoria');
    }
},2000);

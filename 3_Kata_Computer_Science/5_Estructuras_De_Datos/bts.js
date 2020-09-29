// Elemento que va a conformar al arbol.
class Node {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// definición del arbol
class Tree {
    constructor(){
        this.root = null;
    }
    // Tener como métodos principales:
    // agregar - > add : se encarga de agregar un dato
    // contiene -> contains : verificar si un nodo existe respecto a un dato.
    add(data) {
        // verificar si root está vacia : this.root
        if(this.root === null){
            this.root = new Node(data,null,null);
            return;
        }
        let currentNode = this.root;
        while(true){
            if(data < currentNode.data){
                if(currentNode.left !== null){
                    currentNode = currentNode.left
                }else{
                    currentNode.left =  new Node(data,null,null)
                    return;
                }
            } else {
                if(currentNode.right !== null){
                    currentNode = currentNode.right
                } else {
                    currentNode.right = new Node(data,null,null)
                    return;
                }
            }
        }
            // si está vacio
                // crear nuevo nodo (data,null, null) : new Node(data, null, null);
            // si no está vacia
                // crear un apuntador (current node) a mi raiz
                // currentNode = this.root;
                // agregar un ciclo mientras cada nodo sea un subarbol
                    // si la data de mi nuevo nodo es menor que la data en mi nodo actual
                        // revisar si el nodo izquierdo está vacio
                            // mi nodo actual le asigno a la izquierda el nuevo nodo
                    // si la data del nuevo nodo es mayor o igual que en mi nodo actual
                        // si el nodo derecho está vacio
                            // agregar nuevo nodo
                        // cambiar nuestro nodo actual por el hijo derecho del nodo actual
    }
// Infinity
    contains(data) {
        // asignar a currente node el head
        let currentNode = this.root;
        // mientras currentNode exista
        while(currentNode !== null) {
            // si data es igual con currentnode.data
            if(data === currentNode.data) {
                // devolver verdadero
                return true;
            // si mi  no es igual
            } else {
                // si mi dato es menor currentnode.data
                if(data < currentNode.data) {
                    // asignar mi apuntador a la izquierda
                    // currentNode igual a currentNode.left
                    currentNode = currentNode.left;
                    // si mi dato no es menor
                } else {
                    // asignar mi apuntador a la derecha
                    // currentNode igual a currentNode.right
                    currentNode = currentNode.right;
                }
            }
        }
        return false;
    }
}

const arbol = new Tree();
arbol.add(12);
arbol.add(55);
arbol.add(23);
arbol.add(13);
console.log(arbol.contains(19));

console.log(arbol);
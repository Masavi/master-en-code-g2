const graphD = [
    [0,1,1,0,0],
    [0,0,1,0,1],
    [0,0,0,1,0],
    [0,0,0,0,1],
    [0,0,0,0,0]
];
console.log(graphD);
const ej = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
];
const row = [0,0,0,0,0];
class Node {
    constructor(data){
        this.data = data;
    }
}

// grafo dirigido
class Graph{
 constructor(){
     this.nodes = [];
     this.edges = [];
 }
 addNode(data){ // agregar nodo
    const node = new Node(data);
    this.nodes.push(node);
 }
 getNodo(data){ // conseguirNodo
    // let node;
    if(this.nodes.length === 0) {
        return null;
    }
    for(let i = 0; i< this.nodes.length; i++) {
        if(this.nodes[i].data == data){
            return this.nodes[i];
        }
    }
    return null;
    // return node;
 }
 addEdge(data1, data2){ // agregar arista o relacion
    const node1 = this.getNodo(data1);
    const node2 = this.getNodo(data2);
                //[0][0,1]
                //[1][0,1]
                //[2][0,1]
                //[3][0,1]
                //[4][0,1]
    const edge = [node1,node2];
    this.edges.push(edge);
 }
 getIndex(data){
    if(this.nodes.length === 0) {
        return null;
    }
     for(let i = 0; i<this.nodes.length;i++){
        if(this.nodes[i].data === data) {
            return i;
        }
     }
     return null;
 }
 print(){ // imprimir grafo
    for(let i = 0; i < this.edges.length; i++) {
        console.log(`${this.edges[i][0].data} -----> ${this.edges[i][1].data}`);
    }
 }
}

const myGraph = new Graph();
myGraph.addNode('Gera');
myGraph.addNode('Federico');
myGraph.addEdge('Gera','Federico');
myGraph.addNode('Mali');
myGraph.addEdge('Mali','Federico');
myGraph.addNode('Maui');
myGraph.addEdge('Maui','Federico');
myGraph.addNode('Juan Camilo');
myGraph.addNode('Ulma');
myGraph.addNode('Alexis');
myGraph.addNode('Margarito');
myGraph.addEdge('Maui','Margarito');
myGraph.addEdge('Maui','Juan Camilo');
myGraph.addEdge('Margarito','Juan Camilo');
myGraph.addEdge('Ulma','Alexis');

myGraph.print();

const miOtroG = new Graph();
miOtroG.addNode('A');
miOtroG.addNode('B');
miOtroG.addNode('C');

miOtroG.addEdge('A','C');
miOtroG.addEdge('B','A');


miOtroG.print();

const myGraphD = new Graph();

myGraphD.addNode(1);
myGraphD.addNode(2);
myGraphD.addNode(3);
myGraphD.addNode(4);
myGraphD.addNode(5);

myGraphD.addEdge(2, 3);
myGraphD.addEdge(2, 5);

myGraphD.addEdge(3, 4);

myGraphD.addEdge(4, 5);
myGraphD.addEdge(1, 2);
myGraphD.addEdge(1, 3);

myGraphD.print();
console.log(myGraphD.edges);
console.log(myGraphD.nodes);

// hacer el grafo de graphD

function adjacencyMatrix(myGraph) {
    const matrix = [];
    for(let i = 0; i < myGraph.nodes.length; i++) {
        const row = [];
        for(let j = 0; j < myGraph.nodes.length; j++){
            row.push(0);
        }
        matrix.push(row);
    }

    // VAMOS A AGREGAR LAS RELACIONES
    for(let i = 0; i < myGraph.nodes.length; i++){
        const node = myGraph.nodes[i];
        for(let j = 0; j<myGraph.edges.length; j++) {
            // console.log(myGraph.edges[j][0], myGraph.edges[j][1]);
            if(myGraph.edges[j][0].data === node.data){
                //encontrar una arista que concatena(une) con mi nodo actual
                const row = matrix[i];// obtengo fila
                const conectedNode = myGraph.edges[j][1];
                row[myGraph.getIndex(conectedNode.data)] = 1;
            }
        }
    }
    
    return matrix;
}

console.log('Matriz de adjacencias del grafo',adjacencyMatrix(myGraphD));
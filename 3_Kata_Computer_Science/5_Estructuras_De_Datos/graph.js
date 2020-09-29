const graphD = [
    [0,1,1,0,0],
    [0,0,1,0,1],
    [0,0,0,1,0],
    [0,0,0,0,1],
    [0,0,0,0,0]
];
console.log(graphD);

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



myGraph.print();

const miOtroG = new Graph();
miOtroG.addNode('A');
miOtroG.addNode('B');
miOtroG.addNode('C');

miOtroG.addEdge('A','C');
miOtroG.addEdge('B','A');


miOtroG.print();


// hacer el grafo de graphD

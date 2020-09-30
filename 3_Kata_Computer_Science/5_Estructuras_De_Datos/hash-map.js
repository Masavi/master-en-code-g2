class HashTable{
    constructor(bucketSize = 1024){
        this.bucketSize = bucketSize;
        this.data = new Array(bucketSize);
    }
    // key = Elemento que voy a utilizar para generar el hash key
    hashKey(key){
        const h = JSON.stringify(key, Object.keys(key).sort())
        .split('')
        .reduce((acumulador, actual, i) => acumulador + actual.charCodeAt(0) * (i +1), 0);
        return h % this.bucketSize; // posición en la que se va a guardar nuestro elemento
    }
    set(key, value) {
        const hashKey = this.hashKey(key);
        const bucket = this.data[hashKey]; // 0 al 1023
        
        if(Array.isArray(bucket)) {
            // lo primero es verificar si la llave ya está guardado
            // [[key, value],[key, value],[key, value],[key, value]]
            // opción conocida y la opción investigar
            let exist = -1;
            //for(let i = 0 ; i < bucket.length; i++){
            let i = 0;
            while(i < bucket.length && exist === -1) {
                //bucket[i]; [key, value]
                //bucket[i][0]; key
                //bucket[i][1]; value
                if(bucket[i][0] === key) { // si ya existe el elemento
                   exist = i;
                }
                i++;
            }
            if(exist > -1){
                bucket[exist][1] = value;
            } else {   
                bucket.push([key,value]);
            }
        } else {
            this.data[hashKey] = [[key, value]];
        }

    }
    get(key) {
        const bucket = this.data[this.hashKey(key)];
        if(Array.isArray(bucket)){
            let exist = -1;
            let i = 0;
            while(i < bucket.length && exist === -1) {
                //bucket[i]; [key, value]
                //bucket[i][0]; key
                //bucket[i][1]; value
                console.log(bucket[i][0] == key, bucket[i][0], key);
                if(bucket[i][0] == key) { // si ya existe el elemento
                   exist = i;
                }
                i++;
            }
            return exist > -1 ? bucket[exist][1] : null;
        }
        return null;
    }
}

const hash_m = new HashTable(2);

hash_m.set({x: 10 * 5}, 1);
hash_m.set([1,2,3], 2);
hash_m.set('holaTodos', 3);
hash_m.set('holaTodos', 2);

console.log(hash_m);
console.log(hash_m.data);

console.log(hash_m.get([1,2,3]));
// console.log(hash_m.get('holaTodos'));


// Set (diferentes y del mismo tipo)
const array = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5];
const set = new Set();
set.add(2);
console.log(array);

set.add('Mali');
set.add('Mali');
console.log([... new Set(array)]);
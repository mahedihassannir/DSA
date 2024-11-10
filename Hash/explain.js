class HashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    };

    // this is the processor of the whole concept of the hash;
    hash(key) {
        let hashIndex = 0;

        for (let i = 0; i < key.length; i++) {
            hashIndex += key.charCodeAt(i);
        };
        return hashIndex % this.size;
    };

    add(key, value) {
        const index = this.hash(key)
        if (this.table[index] === undefined) {
            console.log('the table index is not used');
            this.table[index] = [key, value];
        } else {

            console.log("the hash table address is not empty");
        }
        return this.table;
    };

};

const Hash = new HashTable(10);

console.log(Hash.add("mahedi", 18));
console.log(Hash.add("mahedi", 18));

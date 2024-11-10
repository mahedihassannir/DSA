class hashTable {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;

    };

    hash(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);

        };
        return hashValue % this.size;
    };

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        };

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value
                return
            };
        };
        this.table[index].push([key, value]);

    };

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (!bucket) return undefined;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            };
        };
        return undefined;
    };
};

const HashTable = new hashTable(10);

HashTable.set("Mahedi", 18);
HashTable.set("Mahedi", 19);
console.log("Mahedi,s age", HashTable.get("Mahedi"));


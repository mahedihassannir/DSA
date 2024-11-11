// This hash implement without collision:

class Hash {
    // Hash Table Structure Making:
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    };

    // The Value Key:
    _hash(key) {
        if (!key) {
            console.log("provide key");
        };

        let index = 0;
        for (let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i);
        };
        return index % this.size;
    };

    set(key, value) {
        let index = this._hash(key);
        console.log(index);
        if (!this.table[index]) {
            this.table[index] = [key, value];
            // Implement Collision Chaining 
            // this.table[index] = [];
        }
        // this.table[index].push([key, value]);
        console.log(this.table);
        // console.log(this.table[6], "index 6");
    };

    get(key) {

        let index = this._hash(key);
        console.log(index, "the get index");
        if (this.table[index] && this.table[index][0] === key) {
            return this.table[index][1];
        }
        else {
            return undefined;
        }

    };

    remove(key) {
        const index = this._hash(key);

        if (this.table[index] && this.table[index][0] === key) {
            this.table[index] = undefined;
            console.log(this.table, "before delete");
        } else {
            return undefined;
        };
    };
};

const hash = new Hash(10);
hash.set("mahedi", 18);
// hash.set("Hassan", 19);
hash.set("men", 19);
console.log(hash.get("men"))

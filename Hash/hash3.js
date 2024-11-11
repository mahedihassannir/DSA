//implement hash with collision:

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
            // Implement Collision Chaining 
            this.table[index] = [];
        };
        this.table[index].push([key, value]);
        console.log(this.table);
    };

    get(key) {
        // with collision
        let index = this._hash(key);

        if (this.table[index]) {

            for (let [storeKey, storeValue] of this.table[index]) {
                if (storeKey === key) {
                    return storeValue;
                };
            };
        } else {
            return undefined;
        };
    };

    remove(key) {
        // with collision
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {

                // console.log(i);

                if (this.table[index][i][0] === key) {
                    // console.log(this.table[index][i][0]);
                    this.table[index].splice(i, 1);
                    console.log(this.table);
                    return true;
                }


            };
        }
        return false;
    };
};



const hash = new Hash(10);
hash.set("mahedi", 18);
hash.set("Hassan", 19);
hash.set("men", 19);
console.log(hash.get("Hassan"))
console.log(hash.remove("Hassan"));

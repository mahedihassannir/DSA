class Hash {
    // Hash Table Structure Making:
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    };

    // The Value Key:
    hash(key) {
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
        let index = this.hash(key);
        console.log(index);
        if (!this.table[index]) {
            this.table[index] = value;
        }
        else {
            console.log(`The Array Index: ${index} already used`);
        };
        console.log(this.table);
    };

    get(key) {







    };

    remove(key) {



        



    };
};

const hash = new Hash(10);
hash.set("mahedi", 18);
hash.set("Hasanat", 19);
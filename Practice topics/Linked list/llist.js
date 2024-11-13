// // Make a linked list with class :


// class lList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.size = 1;
//     };

//     append(data) {

//         let newNode = {
//             value: data,
//             next: null
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.size++;
//     };

//     loop() {
//         let count = 0;
//         let currentNode = this.head;
//         console.log(this.head);
//         while (count < this.size) {
//             currentNode = this.head.next;
//             count++
//         }
//     }

// };


// let newList = new lList(10);
// newList.append(20)
// newList.append(30)
// newList.append(40)
// newList.append(50)
// newList.loop()








// starts


// Thats here we create a Node.
class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    };
};
// Temple of the node is done.


class LLsit {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    append(data) {
        const newNode = new Node(data);
        console.log(data);
        if (this.tail === null) {
            this.head = this.tail = newNode;
        } else {

            this.tail.next = newNode
            this.tail = newNode;
        };
        console.log(this.size);
        this.size++
        console.log(this.size);
    };
    loop() {

        let current = this.head;

        console.log(current);

        while (current !== null) {
            current = current.next;
        };
        console.log(this.size);


    };


};



const list = new LLsit();

list.append(10);
list.append(120);
list.loop();




















class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    };
};

class lList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    // simple adding value 
    append = (data) => {

        const newData = new Node(data);

        if (this.tail === null) {
            this.head = this.tail = newData;
        } else {
            this.tail.next = newData;
            this.tail = newData
            this.size++
        };
    };

    // iterate over the linked list


    // Insert data in any position
    insert = (value, index) => {
        const newNode = new Node(value);
        // console.log(newNode);
        if (index === 1) {
            this.head = newNode;
        } else {
            let currentNode = this.head;

            // console.log(currentNode);

            for (let i = 0; i < index - 2; i++) {

                console.log(i);

                currentNode = currentNode.next;

            };
            newNode.next = currentNode.next;

            currentNode.next = newNode;
        };
        this.size++
    };
    insertAtHead = (value) => {
        const newNode = new Node(value);

        // console.log(newNode.next = this.head);
        // console.log(this.head = newNode);
        newNode.next = this.head;
        this.head = newNode;
        return this.head
    };

    insertatTail = (value) => {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;

        return this.tail



    };

    removeHead = () => {
        this.head = this.head.next

        return this.head

    };

    removeTail = () => {
        let current = this.head;

        while (current.next !== this.tail) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;

        return this.head

    };

    removePosition = (index) => {
        let current = this.head;
        for (let i = 0; i < index - 2; i++) {
            console.log(i);
            current = current.next;
        };

        // console.log(current.next);

        current.next = current.next.next;

        return this.head


    };

    // reverse() {
    //     //Logic is set the node with previous:

    //     let current = this.head;
    //     let previous = null;
    //     // loop
    //     while (current !== null) {

    //         let next = current.next;
    //         current.next = previous;
    //         previous = current;
    //         current = next;


    //     };
    //     return previous;
    // };
    reverse() {
        //Logic is set the node with previous:
        if (this.head === null) {
            return
        } else {

            let current = this.head;
            let prev = null;

            while (current !== null) {
                let next = current.next;
                current.next = prev;
                prev = current;
                current = next
            };
            console.log(prev);
            // print reversed
            let reversed = prev;
            while (reversed !== null) {
                console.log(reversed.value);
                reversed = reversed.next;
            };

        };
    };



    loop = () => {
        console.log(this.head);
        console.log(this.size, "linked list size");
    };
};

const LinkedList = new lList();
LinkedList.append(10);
LinkedList.append(20);
LinkedList.append(30);
LinkedList.loop();
LinkedList.insert(400, 2);
console.log(LinkedList.insertAtHead(999));
LinkedList.insertatTail(888, 2);
console.log(LinkedList.removeHead());
console.log(LinkedList.removeTail());
console.log(LinkedList.removePosition(2));
LinkedList.reverse();


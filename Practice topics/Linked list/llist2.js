
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


    removeElements(value) {
        console.log("val", value);
        if (this.head === null) {
            return null
        };
        // [7,7,7,7]
        while (this.head !== null && this.head.value === value) {
            this.head = this.head.next;
        };
        let current = this.head;
        while (current !== null) {
            if (current.next?.value === value) {
                current.next = current.next.next
            } else {
                current = current.next;
            };
            // console.log(current);
        };
        // console.log(this.head);
    };


    deleteMiddleNode = () => {

        let current = this.head;
        let length = 0;
        while (current !== null) {
            // console.log(current);
            current = current.next;
            length++
        };

        // remove the mid node;

        let position = Math.floor(length / 2);
        console.log(position);

        let newCurrent = this.head;
        let prev = null;
        for (let i = 0; i < position; i++) {
            // console.log(position, "delete position");
            // console.log(newCurrent, "h");
            prev = newCurrent;
            newCurrent = newCurrent.next;
        };

        if (prev) {
            prev.next = newCurrent.next
        }
        else {
            this.head = this.head.next;
        }
        // newCurrent.next = newCurrent.next;

        // return this.head;
        console.log(this.head);

    };

    // Return the middle of the linked list provided the head node 
    findMiddleNode = () => {
        let current = this.head;
        let length = 0;
        while (current !== null) {
            current = current.next;
            length++
        };


        // Find the middle of the length
        let position = Math.floor(length / 2);
        // let position = length / 2;
        console.log(position);
        let node = this.head;
        for (let i = 0; i < position; i++) {
            node = node.next;
        };
        console.log(node);

        return node;

    };


    loop = () => {
        console.log(this.head);
        console.log(this.size, "linked list size");
    };
};

const LinkedList = new lList();
// LinkedList.append(10);
// LinkedList.append(30);
// LinkedList.append(20);
// LinkedList.append(30);
1, 3, 4, 7, 1, 2, 6
LinkedList.append(1);
LinkedList.append(2);
LinkedList.append(3);
LinkedList.append(4);
LinkedList.append(5);
// LinkedList.append(6);   
// LinkedList.append(7);
// LinkedList.append(5);
// LinkedList.append(6);
// LinkedList.append(7);
// LinkedList.append(5);
// LinkedList.insert(400, 2);
// console.log(LinkedList.insertAtHead(999));
// LinkedList.insertatTail(888, 2);
// console.log(LinkedList.removeHead());
// console.log(LinkedList.removeTail());
// console.log(LinkedList.removePosition(2));
// LinkedList.reverse();
// LinkedList.removeElements(7);
// LinkedList.deleteMiddleNode();
LinkedList.findMiddleNode();



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
    loop = () => {
        console.log(this.head);
        console.log(this.size, "linked list size");
    };

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

    insertatTail(data) {
        const newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
    };

    remove = (index) => {




    };
};

const LinkedList = new lList()
LinkedList.append(10);
LinkedList.append(20);
LinkedList.append(30);
LinkedList.loop();
LinkedList.insert(400, 2);
LinkedList.insertatTail(999, 2);


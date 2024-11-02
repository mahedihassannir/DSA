class linkedList {

    constructor(data) {

        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size = 1;
    };

    appendNode = (nodeData) => {

        let newNode = {
            value: nodeData,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.size++
    }

    traversing = () => {
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size) {
            console.log(currentNode);
            currentNode = currentNode.next;
            counter++
        };
    };
};


let newLinedList = new linkedList(100);
newLinedList.appendNode(200);
newLinedList.appendNode(200);
newLinedList.appendNode(30);
newLinedList.appendNode(400);
newLinedList.appendNode(500);
newLinedList.appendNode(600);
newLinedList.appendNode(700);
newLinedList.traversing()
console.log(newLinedList);

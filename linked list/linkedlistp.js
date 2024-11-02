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
        this.tail.next = newNode
        this.tail = newNode
        this.size++
    };

    triverse = () => {
        let counter = 0;
        let currentNod = this.head;

        while (counter < this.size) {
            console.log(currentNod);
            counter++
            currentNod = currentNod.next;
        };
    };
};

let newNode = new linkedList(100);
newNode.appendNode(200)
newNode.appendNode(300)
newNode.appendNode(400)
newNode.triverse();

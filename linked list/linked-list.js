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

    // traversing = () => {
    //     let counter = 0;
    //     let currentNode = this.head;
    //     while (counter < this.size) {
    //         console.log(currentNode);
    //         currentNode = currentNode.next;
    //         counter++
    //     };
    // };
    deleteNode = (index) => {

        let counter = 1;
        let lead = this.head;
        if (index === 1) {
            this.head = this.head.next;
        } else {
            while (counter < index - 1) {
                lead = lead.next;
                counter++
            }
            let nextNode = lead.next.next
            lead.next = nextNode;
            console.log(lead);
        }


    };
};


let newLinedList = new linkedList(100);
newLinedList.appendNode(200);
newLinedList.appendNode(300);
newLinedList.appendNode(400);
newLinedList.appendNode(500);
newLinedList.appendNode(600);
newLinedList.appendNode(700);
newLinedList.appendNode(800);
// newLinedList.traversing()
newLinedList.deleteNode(2)
newLinedList.deleteNode(5)

console.log(newLinedList);

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

}


let newLinedList = new linkedList(200);
newLinedList.appendNode(300);
newLinedList.appendNode(400);
console.log(newLinedList);

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
    };

    append = (data) => {
        const newData = new Node(data);
        if (this.tail === null) {
            this.head = this.tail = newData;
        } else {
            this.tail.next = newData;
            this.tail = newData
        };
    };

    loop = () => {
        console.log(this.head);
    };

    remove = (index) => {




    };
};

const LinkedList = new lList()
LinkedList.append(10);
LinkedList.append(20);
LinkedList.append(30);
LinkedList.loop();

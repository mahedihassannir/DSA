// implement queue with js default function with shift and push
// code

function queue() {

    let queue = [];
    let size = 0;
    let maxLength = 5;

    function enqueue(queueValue) {

        if (size >= maxLength) {
            console.log("queue is over");
            return queue;
        } else {
            queue.push(queueValue);
            size++
        };
    };

    function dequeue() {

        if (queue.length === 0) {
            console.log("Queue Is Already Empty");
            return;
        } else {
            queue.shift();
            size--
        }

    };


    function display() {
        console.log(queue, "display");
        return
    };


    function peek() {
        console.log(queue[size - 1], "peek");
    };


    return {
        enqueue,
        dequeue,
        peek,
        display
    };
};

let Queue = queue();
Queue.enqueue(10);
Queue.enqueue(20);
Queue.enqueue(30);
Queue.enqueue(40);
Queue.enqueue(50);
Queue.dequeue()

Queue.display();
Queue.peek();
// Implement queue with class base queue is same to same like stack but remove from the first not from the last called fifo concept

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
            queue[size] = queueValue;
            size++;
        };
    };

    function dequeue() {

        if (queue.length === 0) {
            console.log("Queue Is Already Empty");
            return;
        } else {

            for (let i = 0; i < queue.length; i++) {
                queue[i] = queue[i + 1]
            }
            size--
            queue.length = size
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
// Make a stack with class

class stack {
    constructor() {
        this.stack = [];
    };
    push(element) {
        const size = this.stack.length;
        const limit = 10

        if (size >= limit) {
            return console.log("Stack limit over");
        } else {
            this.stack.push(element);
        };
        return this.stack;
    };

    pop() {
        if (this.stack.length === 0) {
            return console.log("Stack already empty");
        } else {
            return this.stack.pop();
        };
    };
    peek() {
        return this.stack[this.stack.length - 1];
    };
    size() {
        return this.stack.length;
    };
}

let Stack = new stack();

console.log(Stack.size());
console.log(Stack.push(10));
console.log(Stack.push(20));
console.log(Stack.push(30));
console.log(Stack.push(40));
console.log(Stack.push(50));
console.log(Stack.push(60));
console.log(Stack.push(70));
console.log(Stack.push(80));
console.log(Stack.push(90));
console.log(Stack.push(100));
console.log(Stack.pop());
console.log(Stack.push(110));
console.log(Stack.peek(),"The peeked");
console.log(Stack.size());




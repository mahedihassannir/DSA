// implemnt stack with array

class stack {
    constructor() {
        this.stack = [];
    };

    push(value) {

        if (this.stack.length >= 5) {
            console.log("Stack limit over");
        }
        else {
            this.stack.push(value);
        };
        console.log(`${value} pushed, current stack: ${this.stack}`);

    };
    pop() {

        if (this.stack.length === 0) {
            console.log("Stack is empty");
        }
        else {
            let removed = this.stack.pop();
            console.log(`${removed} popped, current stack: ${this.stack}`);
        };
    };
    peek() {
        // console.log(this.stack[this.stack.length - 1]);
        return this.stack[this.stack.length - 1]
    };


};
let stacks = new stack();
stacks.push(10)
stacks.push(20)
stacks.push(30)
stacks.push(40)
stacks.pop()
console.log(stacks.peek());
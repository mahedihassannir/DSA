// Stack Implement with function and array

function Stack() {
    const stack = [];
    const limit = 5;
    let size = 0;

    function push(element) {
        if (size >= limit) {
            return console.log("Stack limit over");
        } else {
            stack[size] = element
            size++
        }
        return stack

    };

    function pop() {
        if (size === 0) {
            return console.log("Stack Already Empty");
        } else {
            const removedElement = stack[size - 1];
            size--
            return removedElement;
        };
    };

    function peek() {
        if (size === 0) {
            console.log("Stack is empty");
            return
        } else {
            return stack[size - 1]
        };
    };

    function stackSize() {
        return stack.length;
    };

    //return functions of stack 
    return {
        push,
        pop,
        peek,
        stackSize
    };
};

let s = Stack();
console.log(s.push(10));
console.log(s.push(20));
console.log(s.push(30));
console.log(s.push(40));
console.log(s.push(50));
console.log(s.pop(), "remove");
console.log(s.peek());
console.log(s.push(60));







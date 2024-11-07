let arr = [];
let max = 5;
let size = arr.length;

let push = (newValue) => {

    let push = arr[size] = newValue;
    size++
    console.log(push);


};

let pop = () => {
    arr.length--;
};
console.log(size);
push(10);
push(20);
pop();
push(30);



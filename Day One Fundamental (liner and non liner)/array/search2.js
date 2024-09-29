
// linear search with array
const data = [3, 4, 5, 6, 7, 8, 9, 10];
const searchItem = 7;
let indexOfSearchElement = undefined;
for (let i = 0; i < data.length; i++) {
    if (data[i] === 7) {
        indexOfSearchElement = i;
        break;
    };
};
console.log(data[indexOfSearchElement]);
console.log(indexOfSearchElement);




const array = [1, 2, 3, 4, 5, 6];
const position=3;

for (let i = position; i < array.length-1; i++) {

    array[i] = array[i + 1];


}
array.length=array.length-1
console.log(array);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const position = 6;
console.log(array);


for (let i = position; i < array.length - 1; i++) {

    console.log(array[i] = array[i + 1]);

}

array.length=array.length-1;
console.log(array);
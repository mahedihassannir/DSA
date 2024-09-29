
const arr = [1, 2, 3, 4, 5, 6, 7];

const newElement = 100;
const position = 2;
console.log(arr);

for (let i = arr.length - 1; i >= 0; i--) {

    // console.log(arr[i]);
    console.log(i);


    if (i >= position) {

        arr[i + 1] = arr[i];

        // if (i == position) {
        //     arr[i] = newElement;
        // }


    }




}

console.log(arr);
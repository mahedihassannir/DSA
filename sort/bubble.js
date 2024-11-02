
// const bubble_sort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         let temp = arr[i];
//         for (let j = 0; j < i; j++) {
//             // const element = arr[j];
//             // console.log(element);
//             if (arr[i] < arr[j]) {
//                 // console.log(arr[i] < arr[j]);
//                 arr[i] = arr[j];
//                 arr[j] = temp;

//             }
//         }

//     }
//     return arr
// };

// const arr = [6, 1, 2, 3, 4, 5];
// console.log(bubble_sort(arr));
// // bubble_sort(arr)







// const bubble = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         // const element = arr[i];
//         // console.table(i);
//         for (let j = 0; j < i; j++) {

//             console.log(arr[i],arr[j]);

//             if (arr[i] < arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             };

//         };
//     };
//     return arr;
// };

// const arr = [11, 6, 8, 10, 9, 2];
// console.log(bubble(arr));





const bubble = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) { // Adjusted inner loop condition
            // console.log(arr[j] < arr[j + 1]); // Print elements being compared
            // console.log(arr.length - 1 - i);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            };
        };
    };
    return arr;
};

const arr = [11, 6, 8, 10, 9, 2];
console.log(bubble(arr));























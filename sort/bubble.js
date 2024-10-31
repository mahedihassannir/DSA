
const bubble_sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let temp = arr[i];
        for (let j = 0; j < i; j++) {
            // const element = arr[j];
            // console.log(element);
            if (arr[i] < arr[j]) {
                // console.log(arr[i] < arr[j]);
                arr[i] = arr[j];
                arr[j] = temp;

            }
        }

    }
    return arr
};

const arr = [6,8, 1, 2, 3, 4, 5];
console.log(bubble_sort(arr));
// bubble_sort(arr)
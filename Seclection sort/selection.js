function selection_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const element = arr[i];
        let min_idx = i;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[min_idx]) {
                min_idx = j
            };
        };
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
        console.log(element);
    };
};
const arr = [20, 11, 13, 14, 12, 15, 9];
selection_sort(arr);
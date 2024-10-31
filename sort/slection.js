const selection_sort = (array) => {

    for (let i = 0; i < array.length - 1; i++) {
        const element = array[i];
        // console.log(element);
        let min_idx = i;
        // console.log(min_idx);
        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            // console.log(element);
            if (array[j] > array[min_idx]) {
                min_idx = j;
            };
        };
        let index = array[min_idx];
        array[i] = array[min_idx];
        array[min_idx] = [index];
    };
    return array;
};
const array = [20, 10, 15, 9, 5, 1];
console.log(selection_sort(array));

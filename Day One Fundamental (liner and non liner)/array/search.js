// Perform triversal search with linear way:
// find out function
const SearchOperation = (arr, n, target) => {
    for (let i = 0; i < n; i++) {
        if (arr[i] === target) return i
    };
    return -1;
};


// program details passing

const arr = [12, 34, 10, 6, 40];
const target = 40;
const n = arr.length;
const position = SearchOperation(arr, n, target);

if (position == -1) {
    console.log("element not found");
}
else {
    console.log(`element found at ${position + 1}`);
};
//


// The time complexity is n time O(n);
// The Constant time complexity is O(1);

// Final calculation is ~ O(n) ;
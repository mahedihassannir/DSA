function linearFunction(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Identify the algorithm time complexity

// on there the time complexity is O(n) and i also include the constant complexity i know that it is not needed but i am practice thats why i am include okh the constant complexity is 4 


// Identify the algorithm time complexity
function quadraticFunction(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }
    return count;
}

// The complexity of the code is O(n squire); on their the constant time complexity is 4 




// Identify the algorithm time complexity
function logarithmicFunction(n) {
    let i = 1;
    while (i < n) {
        i = i * 2;
    }
    return i;
}

// The complexity is O(log n) and the constant is 4


// Identify the algorithm time complexity
function nLogNFunction(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let j = 1;
        while (j < n) {
            count++;
            j = j * 2;
        }
    }
    return count;
}

// The time complexity is , and the constant is 6


function constantFunction(arr) {
    return arr[0] + arr[1]; // Always accesses two elements, no matter the size of the array
}


// The complexity is constant complexity 1


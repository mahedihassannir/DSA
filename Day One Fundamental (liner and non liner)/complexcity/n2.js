
let a = 0, b = 0;

for (let i = 0; i < 10; i++) { // 1 time iterate 
    console.time("start");
    for (let j = 0; j <10; j++) { // 10 times iterate 

        a = a + j;
        console.log(a, "=> a");
        console.log(j, "=> j");
    };
    console.timeEnd("end");

}

// Solving which complexcity used on this algorithm and think is it good for this algorithm

/*

The constant use in this algorithm is outer loop 1 time and the inner constant is also 1

And the Loops runs n times the first loop run 1 time then the inner run 10 times so the complexcity of the code is n 2 squire; the answer is

O(n²+1);

WE think in a worst case so the constant is out of the calculation and the answer is O(n²) the complexcity of the code; 


 */
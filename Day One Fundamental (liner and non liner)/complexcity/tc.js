
const t0 = performance.now()
const t1 = performance.now()

for (let index = 0; index < 10000000; index++) {
    const element = index;
    const element2 =index;
    const element3 =index;

    console.log(element,(t0 - t1));

}



const m = 100000000000000000000000000000000000000000000000000000000000000000000000000000000000;

console.log(m, (t0 - t1));
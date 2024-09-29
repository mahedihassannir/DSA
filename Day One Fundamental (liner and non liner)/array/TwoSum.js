var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                return [ i, j]
            }
        }
    }
};
const array = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(array, target));


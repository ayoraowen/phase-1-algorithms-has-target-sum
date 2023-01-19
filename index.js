// function sumPair(array){//my first attempt
//   let sum
//   for (i=0; i<array.length;i++){
//     for (j=0; j<array.length-1;j++){
//       sum=array[i]+array[j+1]
//     }
//   }
//   console.log(sum)
//   return sum
// }
function hasTargetSum(array, target) {
  // Write your algorithm here
//   Iterate through the each number in the input array
for (i=0;i<array.length;i++){
  //   Compute complement of the target input number and each number in the array
  let complement=target-array[i]
  //   Iterate through the rest of the input array
  for(j=i+1;j<array.length;j++){
    //     check if each number is complement
    //     if complement is found in the rest of the array return true
    if(complement===array[j]) return true
  }
}
  // if we reach end of input array return false
return false
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  Iterate through the each number in the input array
    Compute complement of the target input number and each number in the array
    Iterate through the rest of the input array
      check if each number is complement
      if complement is found in the rest of the array return true
  if we reach end of input array return false  
*/

/*
  Add written explanation of your solution here
I need to make a function, hasTargetSum, that returns true if any pair of  numbers in an input array add up to a target input number  For example, an array with the values [3,8, 12, 4, 11, 7] coupled with an input number of 10 should return true. Similarly, an array with the numbers [22, 19, 4, 6, 30] coupled with an input number of 25 should return true since  19 & 6 in the array add up to 25
Additionally, the function should also return false if any pair of numbers in are input array do not add  up to an input target number
For example, an array with the numbers [1, 2, 5] coupled with an input number of 4 should return false since none of the numbers  in the input array add up to 4.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 5], 4));
}

module.exports = hasTargetSum;

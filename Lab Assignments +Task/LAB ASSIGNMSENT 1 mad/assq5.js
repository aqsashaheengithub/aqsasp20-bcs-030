let numStr = [2,3,6,1,7];
function getSum(total, num) {
  return total + (num%2===0?num:0);
}
var my_sum = numStr.reduce(getSum, 0);
console.log(my_sum)
 const ps = require('prompt-sync');
  const prompt = ps();
  var randomGuesser = () => {
      var randomNumber = Math.floor((Math.random() * 10 + 1));// 1 to 10
      console.log(randomNumber);
      var guessNumber = prompt("Enter You guess::");// package is installed prompt-sync
      if (guessNumber == randomNumber) {
          console.log("You WIN");
      }
      else {
          console.log("Not Matched")
      } }

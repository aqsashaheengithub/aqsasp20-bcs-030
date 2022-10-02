const newArr = numbers.map(myFunction) 
 function sqcu(){
   for(let i=0; i<=10; i++){
    console.log("the square of 0 to 10 number is  is",i*i);
    console.log("the cube of 1 to 10 ",i**i);
   }
}
console.log(sqcu())
 function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("comsats")); 
 function first_last_1(nums)
{
  var end_pos = nums.length - 1;
  return nums[0] == 10 || nums[end_pos] == 10;
}
console.log(first_last_1([10, 3, 5]));
console.log(first_last_1([1, 3, 5, 10]));
console.log(first_last_1([2, 4, 6]));

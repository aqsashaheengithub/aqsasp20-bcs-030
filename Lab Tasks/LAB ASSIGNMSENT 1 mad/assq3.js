function evenSum(num){

    arr=[];
    let sumStr = num.toString();
    let sumArr = sumStr.split("");
    for (let i = 0; i <= sumArr.length; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
    }
    console.log(arr);
    let sumOfDigits = arr.reduce((a, b) => parseInt(a) + parseInt(b));
    return sumOfDigits;

}
console.log(evenSum(24317));





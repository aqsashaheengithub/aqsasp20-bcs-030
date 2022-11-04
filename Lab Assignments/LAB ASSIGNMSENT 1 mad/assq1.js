
function kthDigitFromLast(n, k)
{
    if (k <= 0)
    {
      console.log(-1);
        return;
    }
    var temp = String(n);
    if (k > temp.length)
    {
      console.log(-1);
    }
    else
    {
        var req = temp.charAt(temp.length - k)
        console.log(Number(req));
    }
}
var n = 23617;
var k = 4;
kthDigitFromLast(n, k);



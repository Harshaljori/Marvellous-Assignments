function summation(Arr : number[])
{
  var sum = 0;
  for(let i = 0; i< NumArray.length; i = i+1 )
  {
    sum = sum + NumArray[i]
  }
  return sum;
 
}

var NumArray : number[] = [23,6,7,4,5,7]
var Ret = 0;
Ret = summation(NumArray)

console.log('Addition Is' + Ret)
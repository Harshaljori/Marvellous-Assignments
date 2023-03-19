function Maximum (no1 :number, no2 :number, no3:number) : void
{
    if(no1 > no2 && no3)
    {
        console.log("largest no is" +no1)
    }else if(no2 > no1 && no3)
    {
        console.log("largest no is" +no2)

    }else
    {
        console.log("largest no is" +no3)

    }
} 

var A : number = 23
var B : number = 89
var C : number = 6

Maximum(A,B,C)
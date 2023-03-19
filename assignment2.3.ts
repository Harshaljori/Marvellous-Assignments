
function Addition(arr, lengtharr) : number
{
    let i = 0;
    let secondlargest = -12345678;
    let largest = secondlargest;

    if(lengtharr < 2)
    {
        console.log("invalid input");
    }
    for(i=0; i<lengtharr; i++)
    {
        if(arr[i] >= largest)
        {
            secondlargest = largest;
            largest = arr[i];
        }
        else if(arr[i] != largest && arr[i] > secondlargest)
        {
            secondlargest = arr[i];
        }
    }

    if(secondlargest === -12345678)
    {
        console.log("no second largest element")
    }else
    {
        return secondlargest;  
    }

    return secondlargest
   
}

var Numarray : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = Addition(Numarray, Numarray.length);

console.log("Second Largest no is: "+Ret)
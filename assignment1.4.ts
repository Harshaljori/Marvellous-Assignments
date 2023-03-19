function ChkPrime(num){

    let isPrime = true
    if(num > 1 ){
       
        for(var i = 2; i < num; i++){
            if(num % i == 0){
                isPrime = false
                break
            }
        }
        if(isPrime)
        {
            console.log(num +"is Prime Number");
        }
        else
        {
            console.log(num +"is not Prime Number");
        }
    }
    else
    {
        console.log("number is not a prime number")
    }
}

ChkPrime(12)
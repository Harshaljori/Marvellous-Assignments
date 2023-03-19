

function Fibonacci(numb : number ) : number
{
        let n1=0;
        let n2 = 1;
        let nexterm;
        console.log("fibonacci series")
        console.log(n1);
        console.log(n2);

        nexterm = n1 + n2 ;

        while(nexterm<= numb)
        {
        
            console.log(nexterm);
            
            n1 = n2;
            n2 = nexterm;
            nexterm = n1 + n2;
            
        }
        return nexterm
}

var retu : number = 0;
retu = Fibonacci(5)
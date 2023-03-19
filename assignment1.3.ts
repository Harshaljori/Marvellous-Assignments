function DisplayFactors (No){
  var i = 0
  for(i=1; i<=No; i++)
  {
    if(No % i == 0)
    {
        console.log(i)
    }
  }
}

DisplayFactors(20);
function Chkstring(a:string) : string
{ 
    let txt = a;

    if(txt.includes("Marvellous"))
    {
        console.log("string contains Marvellous In It" )
    }
    else
    {
        console.log("string does not contains Marvellous In It" )
    }
   return txt;
}



Chkstring("Pune Kothrud Marvellous Infosystem");




class Circle 
{
    Radius : number = 0;
    PI : number = 0;

    constructor(R :number)
    {
        this.Radius = R;
        this.PI = 3.14;
    }

    AreaOfCircle()
    {
        let Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

var obj = new Circle(11);

var Ret : number = 0;

Ret = obj.AreaOfCircle();
console.log("Area of Circle is "+Ret);

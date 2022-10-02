console.log("helo");

let x=48;
if(x<18)
{
    console.log("sorry");
}
else if(x=='48')
{
    console.log("11111");
}
else
{   
    console.log("ok !");
}

//=== for both type and value ,!== also

let y;
if(typeof y =='undefined')
{
    console.log("declared")
}

let a=true,b=false;
if(a && b)
{
    console.log("wrong");
}
if (a || b)
{
    console.log("right");
}

let val=11;
console.log(val==15?'val is ':'not')

switch(val){
    case 11:
        console.log("a");
        break;
    case 15:
        console.log("b");
        break;
    default:
        console.log("c");
        break;
    }
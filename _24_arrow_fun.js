//1st

function show_1()
{
  console.log( "hi,hello");
}
show_1();

//2nd
const a=function()
{
    console.log( "hi,hello");
}
;
a();

//3rd arrow

const b=()=>
{
    return ( "hi,hello");
}
;
console.log( b());

const c=()=>"hi hello";

console.log(c())
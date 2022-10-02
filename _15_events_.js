console.log("events");

let a=document.getElementById("a")
a.addEventListener('click',function(e){console.log("its fookin workin",e)});


let bt=document.getElementById("btn");
bt.addEventListener('click',show)
bt.addEventListener('dblclick',show2)
function show(e)
{
    console.log("pressed---");
     e.preventDefault();
}

function show2(e)
{
    console.log("pressed--2222-");
    e.preventDefault();
}
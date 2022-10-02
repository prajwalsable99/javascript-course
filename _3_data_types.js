// js is dynamically typed language !!!!!!!!!!!!hawa na!!!!!!!!!!!!


/*1.primitive(stack based,compile)   2.ref(heap based ,dynamic)
        str                                        array
        num                                         object 
        bool                                        functions
        null
        undef                                        dates
        symbol                          


*/    

// primitive
var x='tom';
var y=14;
var t=true;
var f=null;
var un=undefined;

console.log((typeof x));
console.log((typeof y));
console.log((typeof t));
console.log((typeof f));
console.log((typeof un));

console.log("#####################################");
// refrence

// 1.array 
var arr=[1,2,3,4,5,6,'ask',true];
console.log((typeof arr));

// 2.obj literals 

let grp=
{   yash:1,
    pj:2,
    ash:3,

}
console.log(grp);

//3.functions

function add_() {

}
console.log((typeof add_));

let dt=new Date();
console.log((typeof dt));
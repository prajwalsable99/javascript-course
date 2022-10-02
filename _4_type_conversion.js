
let x;
x=22;
console.log(x,"type:",typeof x);
x=String(x)
console.log(x,"type:",typeof x);


console.log("###################################################");

let y=[1,2,3];
y=String(y);
console.log(y,"type:",typeof y);

console.log("#######################################################");

let q=8;
console.log(q,"type:",typeof q);
q=q.toString()
console.log(q,"type:",typeof q);

console.log("#################################################");

let r="121";
console.log(r,"type:",typeof r);
r=Number(r)
console.log(r,"type:",typeof r);

console.log("###################################################");
let num='56.44';
console.log((typeof num));

console.log( parseInt(num));

console.log( parseFloat(num));

let z=123.529786;
console.log(z)
console.log(z.toFixed(3))
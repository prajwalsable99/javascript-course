/*
console.log("we are learning arrays");

const scores=[23,45,67,11,88];
const students=['yash','ash','joe','sean']

const both=['apple',2,34.5]

const arr=  new Array(11,22,33,'eleven','tt');

console.log(scores,students,both,arr);

console.log(both[0]);

console.log(scores.length);

console.log(Array.isArray(arr));

console.log(students);
students[0]='clay';
console.log(students);
*/

// -------------------------------------------------------------------------------------------------

let avg=[33,44,13,67,88]

console.log(avg.indexOf(44))

avg.unshift(1);
console.log(avg);

avg.push(99);
console.log(avg);


avg.pop();
console.log(avg);

avg.shift();
console.log(avg);


avg.splice(0,2);
console.log(avg);

let avg2=[55,77];

avg=avg.concat(avg2);
console.log(avg);
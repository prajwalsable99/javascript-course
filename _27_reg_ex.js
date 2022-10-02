console.log("regex")

let str="coder ,the prajwal";
let s="hello";

// ---------------------------------------

let reg=/prajwal/;  // ..... 1. global /prajwal/g or 2.cap insensitive /prajwal/i

// console.log(reg)
// console.log(typeof reg)
// console.log(reg.source)

//---------------------------------------
//1.exec()  finding

// console.log(reg.exec(str));
// console.log(reg.exec(s));


// --------------------------------------
//2. test() t or f

// let val=reg.test(str);
// console.log(val)

// --------------------------------------
//3 match() return array of res or null

// let x=str.match(reg);
// console.log(x)


// --------------------------------------
//4.search()  return index else -1

// let y=str.search(reg);
// console.log(y)


//---------------------------------------
//5.replace()

// let z=str.replace(reg,"yash");
// console.log(z)

//--------------------------------------
// --------------------------------------
// --------------------------------------

//meta characters

// /^shs$/   start,end=(^,$)
//charcter set
//regex= p[a-z]ajwal , pra[xyz]alert,   str='prajwal'
// \w=word character (for mul \w+) ex:/\w+wal/
// \d =for digit \d+
//\D non digit
// \s space 
//--------------------------------


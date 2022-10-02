const arr=['ash','sam','joe','sean'];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }

const obj={
    name:"yash",age:20,job:"programeer"
}

// for (let i = 0; i < Object.keys(obj).length; i++) {
//     const element =obj[ Object.keys(obj)[i]]
//     console.log(element)
// }


//----{{{{{1. for in}}-------------------------------------------------
// for (let key in obj)
// {
//     console.log(obj[key])
// }

let str="prajwal";
// for(let i in str)
// {
//     console.log(str[i])
// }



///-------------------{{{{{ 2. for of}}}}}------------------
for(let i of arr)
{
    console.log(i)
}
for(let i of str)
{
    console.log(i)
}

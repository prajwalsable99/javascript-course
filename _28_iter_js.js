const arr=['ash','sam','joe','sean'];
console.log(arr)

function name_ite(array) {
    let ind=0;

    return {
        next:()=>
        {
            if (ind<array.length)
            {
              return { value:array[ind++],
                done:false}
            }
            else
            {
              return { done:true}
            }
        }
    };
}

const names=name_ite(arr);
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
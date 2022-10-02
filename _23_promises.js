function fun1() {
    return new Promise(function (resolve,reject) {
        setTimeout(()=>{

            const err=true;
            if(!err)
            {
                console.log("promise resolved")
                resolve();
            }
            else{
                console.log("not resolved");
                reject();
            }



        },2000)
    })
}

fun1().then(function(){console.log("thanks");}).catch(function(){console.log("bad");})
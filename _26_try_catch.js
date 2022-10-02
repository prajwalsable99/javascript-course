// var a;
// if (a==undefined)
// {
//     throw new Error('this is undefined')
//     //console.log("undefined");
// }
// else
// {
//     console.log("defined");
// }

try {
    
    console.log("[trying]")
    notdef();
} catch (error) {
    console.log("error:",error);
    console.log("message :",error.message);
    console.log("[-----]")
    
}finally
{
    console.log("end of program")
}
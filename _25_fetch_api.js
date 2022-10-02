let btn2= document.getElementById('b');

let parent = document.getElementsByClassName('container');


//get request

// function getdata() 
// {
//     console.log("[initiated getting data....!]");

//     url="_25_fetch_data.txt";
    
//     fetch(url).then
//     (
//         (respone) =>
//             {return respone.text();}
//     ).then
//     (

//         (data)=>
//             {console.log(data);}
//     ) 
// }

btn2.addEventListener('click',postdata);


//post data
function postdata() 
{
    console.log("[initiated psoting data....!]");

    
    let url="http://dummy.restapiexample.com/api/v1/create";
    let data='{"name":"prajwsssssa111111111l","age":"20","job":"ML"}';
    let par={method:"post", headers:{'Content-Type':'application/json'},body:data}
    fetch(url,par).then
    (response=> response.text())
    .then
    (data=> console.log(data)) 
}


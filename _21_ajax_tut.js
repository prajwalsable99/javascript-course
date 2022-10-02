console.log("hi");

let fetchbtn=document.getElementById('a1');
fetchbtn.addEventListener('click',click_fun)


function click_fun() {

    console.log("[........  fetching........ ]")
    const xhr= new XMLHttpRequest();

    xhr.open('GET','ajax.txt',true);
    
    xhr.onprogress=function () {
        console.log("in process")
        
    }

    xhr.onload=function () {
        if(this.status==200)
        {
            console.log(this.responseText)
        }
        else
        {
            console.log("[---UNABLE TO FETCH----]")
        }   
    }
    xhr.send();

}
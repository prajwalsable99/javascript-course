//dom selectors

// let ele= document.getElementById('a')
// console.log(ele);
// console.log(ele.parentNode) ;//child,class

//query selector

let a=document.querySelector('#b');
console.log(a);
a.innerHTML="<b>hiiiiiiiiiiii</b>"
a.style.color='red'
console.log(a.innerText)
// a.innerText="hello hi";
// console.log(a);


let q=document.querySelector('div')
console.log(q)


let c=document.getElementsByClassName('ch')
console.log(c)
c[2].style.padding="20px";
c[2].style.color='blue';
c[2].style.background="yellow";
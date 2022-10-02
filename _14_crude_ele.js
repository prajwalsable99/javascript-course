let ele=document.createElement('li')
ele.innerText="this we created";
ele.className='ch';
ele.id='l';

console.log(ele)


let dest=document.querySelector('.p')
 console.log(dest)

dest.appendChild(ele);


let ele2=document.createElement('li')
ele2.innerText="this we replaced";
ele2.className='ch';
ele2.id='l2';

console.log(ele2)

ele.replaceWith(ele2);

dest.removeChild(ele2);
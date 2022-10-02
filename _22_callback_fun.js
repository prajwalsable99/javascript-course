
const stu_data=[
    {name:"yash",sub:'ml'},
    {name:'prajwal',sub:'js'}
];


function enroll(stu){
    setTimeout(() => {
        stu_data.push(stu)
    }, 3000);
}

function get_stu() {

    setTimeout(() => {
        let str="";
        stu_data.forEach(function (stu) {
            str+=`<li>${stu.name}</li>`
            
        });
        document.getElementById('st').innerHTML=str;
    }, 3000);
}

let s1={name:"jay",sub:'py'};
enroll(s1);
get_stu();
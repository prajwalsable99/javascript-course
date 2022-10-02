let car=
{
    name:'swift',
    speed:44,
    mil:function (){
        console.log("running")
        
    }
}

console.log(car)

function student(name,marks) {
    this.name=name;
    this.marks=marks;
    this.show=function () {
        console.log(this.name," scored: ",this.marks);
        
    }
    
}

let s1=new student("yash",99)
s1.show()
console.log(s1)
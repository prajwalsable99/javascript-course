console.log("hi")
class human
{
    
    constructor(nm,age,sx)
    {
        this.name=nm;
        this.age=age;
        
        this.sex=sx;
    }
    show()
    {
        console.log(`i am ${this.name} ,age : ${this.age}`);
    }
    // static count()
    // {
    //     this.c=this.c+1;
    // }
}

// yash=new human("yash",19,'male');
// console.log(yash.show())


class coder extends human
{

    constructor(nm,age,sx,lang)
    {
        super(nm,age,sx);
        this.language=lang;
    }

    pro()
    {
        console.log(this.name," language is",this.language);
    }
}

prajwal=new coder("prajwal",19,'male','python');
prajwal.pro()

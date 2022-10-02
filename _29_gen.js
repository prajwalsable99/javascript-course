function* num_gen() {
    let i=0;
    while(true)
    {
        yield i++;
    }
    
}

const gen=num_gen()
console.log(gen.next())
console.log(gen.next())

console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
// chamada em tempo de execução, não esta instanciada e sem nome

let f=function(v1, v2){return v1+v2}

let a = new Function("v1, v2", "return v1+v2") // função construtor anonima

console.log(a(10,5))
console.log(f(10,5))



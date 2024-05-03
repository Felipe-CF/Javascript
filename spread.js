// quebra/espallha um array e devolve elemento por elemento (copia)
// ...
// const soma=(a, b, c)=>{
//     return a+b+c
// }

// let n1=[1, 2, 3]
// let n2 = [4, 5, 6, 7]
// // let n3 = [...n1]
//let n3 = [...n1,...n2]
//console.log("n3: " + n3)
// console.log("n3: " + n3)

// const jog1 = {nome: "eu", energia:100}
// const jog2 = {arma: "cassete", tipo:"pimba de boi"}
// const jog3 = {...jog1, ...jog2}
// console.log(jog3)
// console.log(soma(...n1))

const objs=document.getElementsByTagName("div") // retorna coleção de elemntos( != array) html, só add html
const objs2=[...document.getElementsByTagName("div")] // pode add outros tipos que não html

console.log(objs)
console.log(objs2)
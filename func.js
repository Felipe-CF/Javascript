
function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML="Pedro"
    d2.innerHTML="Império do amor"
    d3.innerHTML="Gabi, gol, goooooooooooooool!"
}

function somando(...valores){
    let res = 0
    for(v of valores)
        res += v
    return res
}

mudarTexto()

console.log(somando(1,2,3,4,5))
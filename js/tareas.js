function getValor(){
    let n1, n2, rta1, n3, n4, rta2, valor

    //guardando datos del HTML en la respectiva variable
    n1 = document.getElementById("cantidad-1").value
    console.log(n1)
    n2 = document.getElementById("valor-1").value
    console.log(n2)

    n3 = document.getElementById("cantidad-2").value
    console.log(n3)
    n4 = document.getElementById("valor-2").value
    console.log(n4)

    rta1 = n1*n2
    console.log(rta1)
    rta2 = n3*n4
    console.log(rta2)
    valor = rta1+rta2
    console.log(valor)

    //enviar la variable al html
    document.getElementById("resproducto1").innerHTML = rta1
    document.getElementById("resproducto2").innerHTML = rta2 
    document.getElementById("resvalor").innerHTML = valor  
}
function getFactura(){
    let r1, r2, r3, r4, r5, r6, r7
    
    //guardando datos del HTML en la respectiva variable
    r1 = document.getElementById("subproyecto").value
    r2 = document.getElementById("producto-1").value
    console.log(r2)
    r3 = document.getElementById("cantidad-1").value
    console.log(r3)
    r4 = document.getElementById("valor-1").value
    console.log(r4)
    r5 = document.getElementById("producto-2").value
    console.log(r5)
    r6 = document.getElementById("cantidad-2").value
    console.log(r6)
    r7 = document.getElementById("valor-2").value
    console.log(r7)


    rta01 = r3*r4
    console.log(rta01)
    rta02 = r6*r7
    console.log(rta02)
    valor1 = rta01+rta02
    console.log(valor1)

    //enviar la variable al html
    document.getElementById("resubproyecto").innerHTML = r1
    document.getElementById("resproducto-1").innerHTML = r2
    document.getElementById("rescantidad-1").innerHTML = r3
    document.getElementById("resvalor-1").innerHTML = r4
    document.getElementById("resValorTPruduc1").innerHTML = rta01
    document.getElementById("resproducto-2").innerHTML = r5
    document.getElementById("rescantidad-2").innerHTML = r6
    document.getElementById("resvalor-2").innerHTML = r7
    document.getElementById("resValorTPruduc2").innerHTML = rta02
    document.getElementById("resValorTotal").innerHTML = valor1
}
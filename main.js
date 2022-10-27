const sumar = document.getElementById('suma')
const restar  = document.getElementById('resta')
const contador = document.getElementById('contador')
const reset = document.getElementById ('reset')

let numero = 0

sumar.addEventListener('click', () =>{
    numero++
    contador.innerHTML = numero;
})

restar.addEventListener('click', () =>{
    if(numero == 0){
        contador.innerHTML = "Vacio" 
    }
    else{
        numero--
        contador.innerHTML = numero;
    }
    
})

reset.addEventListener('click', () => {
    contador.innerHTML = 0;
    numero = 0
    alert ("Se agrego al carrito satisfactoriamente")
}) 
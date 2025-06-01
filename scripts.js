function resultGenerator(){
const min = Math.ceil ( document.querySelector(".input-min").value);
const max = Math.floor (document.querySelector(".input-max").value);
const resultado = document.querySelector(".resultadoSorteio")
if(min < max){
const result = Math.floor(Math.random() * (max - min + 1)) + min;
resultado.innerHTML = result
}
else{
     resultado.innerHTML="o primeiro numero devera ser menor que o segundo"
}
}



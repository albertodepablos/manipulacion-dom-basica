const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pid = document.querySelector('#pid');
const form = document.querySelector('#form');

form.addEventListener('submit', Onclick);

function Onclick (event){
    event.preventDefault();
    pid.innerHTML = "Resultado: " + input1.value + input2.value;
}




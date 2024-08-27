const botonDepositar = document.getElementById('btn-depositar');
const inputDepositar = document.getElementById('input-depositar');
const botonRetirar = document.getElementById('btn-retirar');
const inputRetirar = document.getElementById('input-retirar');
const botonRegresar = document.getElementById('btn-regresar');

let saldo = 1000;
const h1Saldo = document.getElementById('saldo');

let actualizarSaldo = ()=>{
    h1Saldo.innerHTML = "Su saldo es de $" + saldo;
}
actualizarSaldo();

botonDepositar.addEventListener('click',()=>{
    let valueInt = parseInt(inputDepositar.value);
    if(isNaN(valueInt) || valueInt < 1){
        inputDepositar.value = "";
        return alert("Introduce un valor válido");
    }
    saldo += valueInt;
    actualizarSaldo();
    inputDepositar.value = "";
})

botonRetirar.addEventListener('click',()=>{
    let valueInt = parseInt(inputRetirar.value);
    if(isNaN(valueInt) || valueInt < 1){
        inputRetirar.value = "";
        return alert("Introduce un valor válido");
    } else if(saldo - valueInt < 10){
        inputRetirar.value = "";
        return alert("Debe dejar $10 mínimo en la cuenta");
    } 
    saldo -= valueInt;
    actualizarSaldo();
    inputRetirar.value = "";
})

botonRegresar.addEventListener('click',()=>{
    window.location.href = 'index.html';
})
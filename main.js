const formularioHtml = document.getElementById('formulario');
const usuarioBaseDatos = "Leo";
const passwordBaseDatos = "1234";

formularioHtml.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    const usuarioIngresado = document.getElementById('inputUsuario').value;
    const passwordIngresado = document.getElementById('inputPassword').value;
    console.log('Usuario ingresado ' + usuarioIngresado);
    console.log('Password ingresado ' + passwordIngresado);

    if(usuarioIngresado === usuarioBaseDatos && passwordIngresado === passwordBaseDatos){
        window.location.href = 'cajero.html';
    }
});
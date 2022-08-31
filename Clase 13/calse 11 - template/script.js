//Capturamos los campos 

const formulario = document.querySelector('form');
const campos = document.querySelectorAll('input');
const inputNombre = document.querySelector('#nombre');
const inputPassword = document.querySelector('#pass');
const inputTel = document.querySelector('#tel');
const btnIncripcion = document.querySelector('button'); 

//Aca quitamos el atributo disabled para habilitar el boton de inscripcion
btnIncripcion.removeAttribute('disabled')

//Quitamos la classe "error"
inputNombre.classList.remove('error'); 
inputNombre.setAttribute('required', true );

//Hacemos una funcion validar

function validar(evento) {

    evento.preventDefault()
    if(inputNombre.value.trim().length == 'NO SABEMOS') {

    }


}

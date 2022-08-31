const boton = document.querySelector('button');
const formulario = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const mail = document.querySelector('#email');
const clave = document.querySelector('#password');

const registro = {
    nombre: '',
    correo: '',
    contraseña: '',

}
formulario.addEventListener('submit', validar);


function validar(evento){
    evento.preventDefault();
    console.log('Validando formulario');
    let listaHobbies = [];
    // Validacion de inputs
    campos.forEach(element => {
        if( element.value.trim() == ''){
            element.classList.add('error')
        }

        element.addEventListener('click', function(){
            element.classList.remove('error');
        })

    });

    hobbies.forEach(hobbie => {
        if( hobbie.checked == true){
            console.log(hobbie.id, hobbie.checked);
            listaHobbies.push(hobbie.id);
        }
    });

    if( listaHobbies.length > 4){
        // Mostar mensaje de error
    } else {
        inscripcion.hobbies = listaHobbies;

    }

    // Agregar los datos al objeto inscripcion
    inscripcion.nombre = nombre.value;


}



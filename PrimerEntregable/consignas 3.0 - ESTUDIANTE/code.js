/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt('Ingrese su nombre: ');
  datosPersona.edad = prompt('Ingrese su año de nacimiento ');
  datosPersona.ciudad = prompt('Ingrese la ciudad donde vives: ');
  datosPersona.interesPorJs = confirm ('¿Te Interesa JavaScript?: ');

}

function ageCalculate() {
  datosPersona.edad = 2022 - datosPersona.edad;
}

function javascriptInterest() {
  if(datosPersona.interesPorJs) {
    datosPersona.interesPorJs = "Si"
  } else {
    datosPersona.interesPorJs = "No"
  }

console.log(javascriptInterest)

}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    document.getElementById('nombre').innerText = datosPersona.nombre;

    ageCalculate();
      document.getElementById('edad').innerText = datosPersona.edad

      document.getElementById('ciudad').innerText = datosPersona.ciudad;

    javascriptInterest();
      document.getElementById('javascript').innerText = datosPersona.interesPorJs;
}

let doClick = true;
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
const container = document.getElementById('fila');

if(doClick) {
  listado.forEach((cards) =>{
  const cardsClass = `<div class = 'caja'>
                    <img src = '${cards.imgUrl}'>
                    <p class = 'lenguaje'> Lenguaje: ${cards.lenguajes}</p>
                    <p class = 'bimestre'> Bimestre: ${cards.bimestre}</p>
                <div/>`
                
  container.innerHTML += cardsClass;
})
}
doClick = false;
console.log(doClick);
}
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
let darkMode = document.getElementById('sitio')
darkMode.classList.toggle('dark')
console.log(darkMode)

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const pressKeyF = document.querySelector('.oculto')

document.addEventListener("keydown", (e) => {
  if(e.key == 'f') {
        pressKeyF.classList.remove('oculto')
  }
  
}); 



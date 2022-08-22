// Solicita una apliacion que Pida al usuario tres links de images
// Crear tres card con las imagenes solicitas

// https://images.unsplash.com/photo-1573435567032-ff5982925350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80

// https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

// https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80

let app = document.getElementById('app');
console.log(app)
app.style.display = 'flex';
let galeria = [];

app.classList.add('flex')

function crearCard(url){
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

//Etapa 1
    let link = document.createElement('a'); 
    link.setAttribute('class', 'rutas-img')

//Etapa2
    link.setAttribute('href', url)
    link.setAttribute('target', '_blank' )

    let imagen = document.createElement('img');
    imagen.setAttribute('class', 'img-responsive');
    imagen.setAttribute('src', url);
    imagen.setAttribute('alt', 'Gatito y Perrito');


    card.appendChild( link );
    console.log(card, imagen);
    app.appendChild(card);
    link.appendChild(imagen)
}

for (let i = 1; i <= 3; i++) {
    let url = prompt('Ingrese la URL de la imagen');
    galeria.push(url);
    crearCard(url);
}

/* 
Etapa 3


*/

//Creando un array de objetos
let kittens= [
{   
    id: 1,
    name: 'Simba',
    color: 'Orange',
    imgUrl: '',
    age: 2
},
{
    id: 2,
    name: 'Chimu',
    color: 'Black',
    imgUrl: '',
    age: 1
},
{
    id: 3,
    name: 'Gris',
    color: 'Grey',
    imgUrl: '',
    age: '1'
}
]

const container = document.querySelector('main');
console.log(container);
//Creando las cards de gatitos usando tamplate literals
function createCard(kitten, container){
    const card =`<div id ='${kitten.id}' class ="card"> 
                    <h2> ${kitten.name}</h2>
                    <img scr = "${kitten.imgUrl}">
                    <p> ${kitten.color}</p>
                </div>`
    container.innerHTML += card;
    
}  
//Agregando una funcion para agregar una clase a un elemento desde js
//
function selection(id) {
    let activeCard = document.querySelectorAll('.active'); 
    activeCard[0].classList.remove('active')
    let card1 = document.getElementById(id);
    card1.classList.add('active');
}

//Agregando el modo oscuro
function darkMode(){
    document.querySelector('body').classList.toggle('dark')

}

for(const kitten of kittens) {
    console.log(kitten)
    createCard(kitten, container)
    
}
//Trabajando con nodos
//1-.Crear el nodo
//2-.Seleccionar el padre
//3-. Agregar el nodo al padre
//Se declaraan variables con cada uno de los nodos para hacer mas prolijo el codigo
let title = document.createElement('h2');
title
let header = document.querySelector('.header').appendChild(title);

header.appendChild(title)







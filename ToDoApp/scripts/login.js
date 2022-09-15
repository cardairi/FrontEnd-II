window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector('form');
    const inputMail = document.querySelector('#inputEmail');    
    const inputPassword = document.querySelector('#inputPassword');



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
       event.preventDefault()
       console.log('Login data')
        
       //Values for login 

       const userData  = {
            "email": inputMail.value,
            "password": inputPassword.value

       }

       console.log(userData);
       realizarLogin(userData)
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(userData) {
        const url = 'https://ctd-todo-api.herokuapp.com/v1/users/login'; 

        const config = {
            method: 'POST',
            Headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(userData)
        }

        fetch(url, config).then((response) => response.json() )
        .then((data) => {
            console.log(data);
        }).catch ((response) => {
            console.log(response);
        })
   
    };


});
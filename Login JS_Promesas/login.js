// function loginUser(username, password) {
//     return new Promise((resolve, reject) => {  // Lógica de inicio de sesión simulada (sustituir por la lógica de inicio de sesión real)
//         setTimeout(() => {
//             if (username === 'user' && password === 'password') {
//                 resolve('Inicio sesión correctamente.!');
//             } else {
//                 reject('Nombre de usuario o contraseña no válidos.');
//             }
//         }, 1000);
//     });
// }

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
    
//     if (!username || !password) {
//         document.getElementById('loginMessage').innerText = 'Introduzca el nombre de usuario y la contraseña.';
//         return;
//     }
    
//     loginUser(username, password)
//     .then(message => {
//         document.getElementById('loginMessage').innerText = message;
//     })
    
//     .catch(error => {
//         document.getElementById('loginMessage').innerText = error;
//     });
// });



function loguear(user, password) {
    return new Promise((resolve, reject) => { 
        const usuarios=["Diego", "Daniel", "Tania"];
        const contrasenas=["1234", "4321", "5678"];
        for (let i = 0; i < usuarios.length; i++){
            if (user == usuarios[i] && password == contrasenas[i] ){
                resolve(true);
                return;
            }
        }
        reject(false);

    });
    
}

document.getElementById("botton").addEventListener("click", (e) => { 
    e.preventDefault;
    loguear(document.getElementById("usuario").value, 
    document.getElementById("contrasena").value)
    .then(result => {
        alert("Inicio de sesion exitoso:", result);
        window.location.href = "http://127.0.0.1:5500/bienvenido.html";
    })
    .catch(error => {
        alert("Inicio de sesion fallida:", error);
        

    });

})



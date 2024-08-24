// Variables

const btn = document.querySelector('button');
const rango = document.querySelector('#range');
let longitud = document.querySelector('.longitud');
longitud.textContent = rango.value;
let passwordInput = document.querySelector('#password');
const copy = document.querySelector('.copy');
const alerta = document.querySelector('.alerta');


// Eventos
rango.addEventListener('change', ()=>{
    longitud.textContent = rango.value;
})

btn.addEventListener('click', ()=>{
    passwordInput.value=generarPassword();
})

copy.addEventListener('click', (e)=>{
    let info = e.target.parentElement.firstChild.nextSibling.value;
    copyPassword(info);
})


// Funciones

function generarPassword(){

    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '@$!%*?&';

    const contrasena = [
        letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)],
        letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)],
        numeros[Math.floor(Math.random() * numeros.length)],
        simbolos[Math.floor(Math.random() * simbolos.length)]
    ];

    const todosCaracteres = letrasMayusculas + letrasMinusculas + numeros + simbolos;

    while (contrasena.length < longitud.textContent) {
        contrasena.push(todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)]);
    }

    return contrasena.sort(() => Math.random() - 0.5).join(''); // Mezcla los caracteres

}

function copyPassword(passwd){
    navigator.clipboard.writeText(passwd);

    alerta.style.opacity = 1; 

    setTimeout(()=>{
         alerta.style.transition = 'transform 2s';
         alerta.style.opacity = 0; 
        alerta.style.transition = 'opacity 2s';
    }, 1000);

    if(alerta.style.transform === 'translateY(-10px)'){
         alerta.style.transform = 'translateY(0px)'
    } else{
         alerta.style.transform = 'translateY(-10px)'
    }
}
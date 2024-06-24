

const asignarTexto = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
}

asignarTexto('h1', 'Juego del numero secreto')
asignarTexto('p', 'Adivina el numero secreto')
let numeroSecrte = Math.floor(Math.random() * 10) + 1;


let intentos = 1;
        const jugar = () => {
        
        let input = document.querySelector('input');
        let numero = parseInt(input.value);

        if(intentos === 5){
            input.disabled = true;
            asignarTexto('h1', 'Juego terminado')
            asignarTexto('p', 'El numero era ' + numeroSecrte)
            asignarTexto('strong', `solo tienes ${intentos} intentos`)
            let reiniciar = document.querySelector('#reiniciar');
            reiniciar.disabled = false;
            document.querySelector('#jugar').disabled = true;
            reiniciar.onclick = () => {
                location.reload();
            }
            return;
        }
        
        if (numero === numeroSecrte) {
            asignarTexto('h1', 'Felicidades, encontraste el numero')            
            asignarTexto('p', `lo hiciste en  ${intentos === 1 ? '1 intento' : intentos + ' intentos'} `  )
            asignarTexto('strong', '');
            let reiniciar = document.querySelector('#reiniciar');
            reiniciar.disabled = false;
            document.querySelector('#jugar').disabled = true;
            reiniciar.onclick = () => {
                location.reload();
            }
        } else {
        
            asignarTexto('h1', 'Intenta de nuevo')
            if(numero > numeroSecrte){
                asignarTexto('p', 'El numero es menor')
                asignarTexto('strong', 'Intentos: ' + intentos)
            }else{
               asignarTexto('p', 'El numero es mayor')
               asignarTexto('strong', 'Intentos: ' + intentos)
            }
            input.value = '';
        }
        console.log(intentos);
       intentos++;
    }




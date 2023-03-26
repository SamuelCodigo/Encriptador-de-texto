
const encriptarBoton = document.getElementById("encriptar");
const desencriptarBoton = document.getElementById("desencriptar");

function encriptar(){

    let cadenaDeTexto = document.getElementById("textoEntrada").value;
    let contador = 0;
    let texto = "";

    while(contador < cadenaDeTexto.length)
    {
        if(cadenaDeTexto[contador] === "a"){
            texto += "ai"
            contador++;
            continue;
        }

        if(cadenaDeTexto[contador] === "e"){
            texto += "enter"
            contador++;
            continue;
        }

        if(cadenaDeTexto[contador] === "i"){
            texto += "imes"
            contador++;
            continue;
        }

        if(cadenaDeTexto[contador] === "o"){
            texto += "ober"
            contador++;
            continue;
        }

        if(cadenaDeTexto[contador] === "u"){
            texto += "ufat"
            contador++;
            continue;
        }


        texto += cadenaDeTexto[contador];
        contador++;
        console.log(contador);
    }

    parrafoSalida.textContent = texto;
    return texto;
}

function desencriptar(){

    let textoEntrada = document.getElementById("textoEntrada").value;
    let textoSalida = "";
    let contador = 0;

    console.log(textoEntrada)

    while(contador < textoEntrada.length){

        if(textoEntrada[contador] === "a" && textoEntrada[contador+1] === "i"){
            
                textoSalida += "a" 
                contador += 2;
                console.log("a")
                continue;

        }
        else if(textoEntrada[contador] === "e" && textoEntrada[contador+1] === "n" && textoEntrada[contador+2] === "t" && textoEntrada[contador+3] === "e" && textoEntrada[contador+4] === "r"){
                textoSalida += "e";
                contador += 5;
                console.log("e")
                continue
        }
        else if(textoEntrada[contador] === "i" && textoEntrada[contador+1] === "m" && textoEntrada[contador+2] === "e" && textoEntrada[contador+3] === "s"){
                textoSalida += "i";
                contador += 4;
                console.log("i aqui")
                continue
        }
        else if(textoEntrada[contador] === "o" && textoEntrada[contador+1] === "b" && textoEntrada[contador+2] === "e" && textoEntrada[contador+3] === "r"){
            textoSalida += "o";
            contador += 4;
            console.log("o")
            continue
        }
        else if(textoEntrada[contador] === "u" && textoEntrada[contador+1] === "f" && textoEntrada[contador+2] === "a" && textoEntrada[contador+3] === "t"){
            textoSalida += "u";
            contador += 4;
            console.log("u")
            continue
        }
        else{
           textoSalida += textoEntrada[contador];
           contador++;
           console.log(textoEntrada[contador])
        }
        
    }

    parrafoSalida.textContent = textoSalida;
    return textoSalida;
}


function salidaTextoEncriptado(){
    parrafoSalida.textContent = cambiarLetra(textoEntrada);
};


encriptarBoton.addEventListener("click", encriptar,true);
desencriptarBoton.addEventListener("click", desencriptar,true);








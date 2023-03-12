const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    //let validador = textoEscrito.match(/^[a-z]*$/);
    let validador = textoEscrito.match(/^[a-z\s]*$/);
    //const regex = /^[a-z\s]*$/;

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}

//Laves de encriptacion


function encriptar(stringEncriptada){
    
    let  abc =   ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
    let abcInv = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a',' '];
    
    stringEncriptada = stringEncriptada.toLowerCase();
    let miTextoEncriptado = [];

    // Lo convertimos en array
    let miArray = stringEncriptada.split('');
    

    for(let i = 0; i< miArray.length; i ++){
        for(let j = 0; j < abc.length; j++){
            if(miArray[i] == abc[j]){
                miTextoEncriptado[i] = abcInv[j];
            } 
        }
    }
    
    //Convertimos char array a string
    let textoEncriptado =  miTextoEncriptado.join("");

    return textoEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    console.log("Desencriptado vale : " + textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDesencriptada){
  
    let  abc =   ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
    let abcInv = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a',' '];
       
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    let miTextoDesEncriptado = [];

    // Lo convertimos a char array
    let miArrayEncriptado = stringDesencriptada.split('');

    console.log("Llegó : " + miArrayEncriptado);
    
    // Analizamos
    for (let i = 0; i < miArrayEncriptado.length; i++){
        for(let j = 0; j < abcInv.length; j++){
            if(miArrayEncriptado[i] == abcInv[j]){

                miTextoDesEncriptado[i] = abc[j];

                
                
            }
        }

    }

    //Convertimos char array a string
    let textoDesEncriptado =  miTextoDesEncriptado.join("");

    return textoDesEncriptado;

}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    console.log("Se copió : " + mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado")
}



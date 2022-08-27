function encriptar(){
    var texto = document.getElementById("text-input").value.toLowerCase();
    //i es para que afecte tanto minusculas como mayusculas -- e else{}
    //g es para toda la linea u oración}
    //m es para que afecte a multiples lineas a parrafo
    var txtCifrado = texto.replace(/e/igm, "enter" );
    var txtCifrado = txtCifrado.replace(/o/igm, "ober" );
    var txtCifrado = txtCifrado.replace(/i/igm, "imes" );
    var txtCifrado = txtCifrado.replace(/a/igm, "ai" );
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat" );

    //Esta funcion de aquí es para que la imagen y el texto de la derecha desaparesca 
    //cuando den el resultado querido-
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto-der").style.display = "none";
    document.getElementById("texto-der-2").innerHTML = txtCifrado;
    document.getElementById("boton-copy").style.display = "show";
    document.getElementById("boton-copy").style.display = "inherit";
}
//Boton para que desencripte la información
function desencriptar(){
    var texto = document.getElementById("text-input").value.toLowerCase();
    //i es para que afecte tanto minusculas como mayusculas -- e else{}
    //g es para toda la linea u oración}
    //m es para que afecte a multiples lineas a parrafo
    var txtCifrado = texto.replace(/enter/igm, "e" );
    var txtCifrado = txtCifrado.replace(/ober/igm, "o" );
    var txtCifrado = txtCifrado.replace(/imes/igm, "i" );
    var txtCifrado = txtCifrado.replace(/ai/igm, "a" );
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u" );

    //Esta funcion de aquí es para que la imagen y el texto de la derecha desaparesca 
    //cuando den el resultado querido-
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto-der").style.display = "none";
    document.getElementById("texto-der-2").innerHTML = txtCifrado;
    document.getElementById("boton-copy").style.display = "show";
    document.getElementById("boton-copy").style.display = "inherit";
}
//fuction para copiar la información que el encriptadot o desencriptador 
function copiar(){
    var contenido = document.querySelector("#texto-der-2");
    contenido.select();
    document.execCommand("copy");
    alert("copiado")
}
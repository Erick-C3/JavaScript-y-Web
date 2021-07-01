
const CONTRASENIA_REGISTRADA = 123;

let nombreUsuario = "nombre por defecto";
let contraseniaIngresada = 0;

nombreUsuario = window.prompt("Ingrese su nombre"); //scanf("%s", &nombreUsuario);
contraseniaIngresada = window.prompt("Ingrese su contraseña");


//document.write("<h1>" + nombreUsuario + "</h1>");// printf("<h1> %s </h1>", nombreUsuario); // Escribir "<h1>" nombreUsuario "</h1">
//document.write("<h1>" + contraseniaIngresada + "</h1>");

if( contraseniaIngresada == 123){
	document.write("<h1>" + nombreUsuario + "</h1>");
}else{
	document.write("<h1> Error </h1>");
	window.alert("Error");
}


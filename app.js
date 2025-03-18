// Creando una array vacia para almacenar los nombres

let listadeAmigos = [];

//Implementando Una funcion para agregar los amigos
function agregandoAmigos() {
    //Capturamos el valor ingresado por el usuario
    const input = document.getElementById("amigo");
    //Obtenemos el valor actual del campo y adicional eliminamos espacion en blanco
    const nombres = input.value.trim();
    //Ingresamos una condicional para validar que el usuario no ingrese caracteeres vacios
    if (nombres === "") {
        alert("Por favor ingrese un nombre valido");
        return;
    }

    //Agregamos texto y actualizamos el array mediante una funcion
    listadeAmigos.push(nombres);
    actualizarListaAmigos();
    //limpiamos la caja de texto
    input.value = ""
}

// Creamos la funcion para actualizar la lista en la caja de texto
function actualizarListaAmigos(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listadeAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });

}
//Creamos la funcion para realizar el sorteo del amigo secreto

function sorteoAmigo() {
    if (listadeAmigos.length < 2) {
        alert("Debe ingresar al menos 2 amigos para realizar el sorteo.");
        return;
    }
//generamos el indice aleatorio para el sirteo del amigo secreto
    const  randomIndex = Math.floor(Math.random() * listadeAmigos.length);
    const sorteoAmigos = listadeAmigos[randomIndex];
//Generamos el codigo para mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${sorteoAmigos}</strong></li>`;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    listadeAmigos = []; // Vaciamos la lista de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiamos la lista en la interfaz
    document.getElementById("resultado").innerHTML = ""; // Borramos el resultado del sorteo
    document.getElementById("amigo").value = ""; // Limpiamos el campo de entrada
    alert("El juego ha sido reiniciado."); // Mensaje opcional para confirmar el reinicio
}

let productos = [
    { nombre: "Hamburguesa", precio: 1500 },
    { nombre: "Empanadas", precio: 1000 },
    { nombre: "Sandwich", precio: 2000 },
    { nombre: "Coca-Cola", precio: 800 },
    { nombre: "Sprite", precio: 850 }
];

// Función para mostrar el menú de productos
function mostrarMenu() {
    console.log("PRODUCTOS DISPONIBLES:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i].nombre} - $${productos[i].precio}`);
    }
}

// Función para obtener la selección del cliente
function obtenerSeleccion() {
    let seleccion = prompt("Por favor, seleccione un producto (ingrese el número correspondiente) \n 1. Hamburguesa\n 2. Empanadas\n 3. Sandwich\n 4. Coca-Cola\n 5. Sprite\n Escriba 'ya' para completar su orden");
    while (seleccion !== "1" && seleccion !== "2" && seleccion !== "3" && seleccion !== "4" && seleccion !== "5" && seleccion !== "ya") {
        seleccion = prompt("Selección inválida. Por favor, seleccione un producto (ingrese el número correspondiente), o escriba 'ya' si ha terminado:");
    }
    return seleccion;
}

// Mostramos el menú y obtenemos la selección del cliente
mostrarMenu();
let seleccion = obtenerSeleccion();
let productosSeleccionados = [];

while (seleccion !== "ya") {
    switch (seleccion) {
        case "1":
            console.log(`Usted ha seleccionado la ${productos[0].nombre} - $${productos[0].precio}`);
            productosSeleccionados.push(productos[0]);
            break;
        case "2":
            console.log(`Usted ha seleccionado las ${productos[1].nombre} - $${productos[1].precio}`);
            productosSeleccionados.push(productos[1]);
            break;
        case "3":
            console.log(`Usted ha seleccionado el ${productos[2].nombre} - $${productos[2].precio}`);
            productosSeleccionados.push(productos[2]);
            break;
        case "4":
            console.log(`Usted ha seleccionado la ${productos[3].nombre} - $${productos[3].precio}`);
            productosSeleccionados.push(productos[3]);
            break;
        case "5":
            console.log(`Usted ha seleccionado la ${productos[4].nombre} - $${productos[4].precio}`);
            productosSeleccionados.push(productos[4]);
            break;
    }
    seleccion = obtenerSeleccion();
}

// Mostramos los productos seleccionados y el total a pagar
if (productosSeleccionados.length > 0) {
    console.log("PRODUCTOS SELECCIONADOS:");
    let total = 0;
    for (let i = 0; i < productosSeleccionados.length; i++) {
        console.log(`${i + 1}. ${productosSeleccionados[i].nombre} - $${productosSeleccionados[i].precio}`);
        total += productosSeleccionados[i].precio;
    }
    console.log(`TOTAL A PAGAR: $${total}`);
}

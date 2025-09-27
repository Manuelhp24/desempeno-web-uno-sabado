//En app.js, pide al usuario su nombre con un prompt y guárdalo en una variable nombreUsuario.
// Declara otras dos variables globales: saldo (inicia en 1000) y gastosTotales (inicia en 0).

let nombreUsuario = prompt("Bienvenidos a tu APP de control de gastos, Por favor ingresa tu nombre:");
let saldo = 1000;
let gastosTotales = 0;

//Desarrolla una función declarativa llamada mostrarBalance().
// No recibirá parámetros.
// Su tarea será mostrar en la consola el estado financiero actual. Ej: "Hola, [Nombre], tu saldo es de: $1000. Has gastado: $0.".
function mostrarBalance() {
    let nombreUsuario = obtenerNombreUsuario();
    console.log(`Hola, ${nombreUsuario}, tu saldo es de: $${saldo}. Has gastado: $${gastosTotales}.`);
}
mostrarBalance();

// Crea una función de expresión (const registrarIngreso = function() {...}).
// Debe aceptar un parámetro: montoIngreso.
// Incrementa la variable saldo con el montoIngreso.
// Muestra un mensaje en consola. Ej: "Ingreso de $[monto] registrado. Nuevo saldo: $[saldo]".
const registrarIngreso = function(montoIngreso) {
    saldo += montoIngreso;
    console.log(`Ingreso de $${montoIngreso} registrado. Nuevo saldo: $${saldo}.`);
}
// Crea una función flecha (const registrarGasto = (montoGasto) => {...}).
// Debe aceptar un parámetro: montoGasto.
// Condicional: Si montoGasto es menor o igual al saldo, réstalo del saldo, súmalo a gastosTotales y muestra un mensaje de éxito. 
// Si no, muestra "Fondos insuficientes".

const registrarGasto = (montoGasto) => {
    if (montoGasto <= saldo) {
        saldo -= montoGasto;
        gastosTotales += montoGasto;
        console.log(`Gasto de $${montoGasto} registrado. Nuevo saldo: $${saldo}.`);
    } else {
        console.log("Fondos insuficientes.");
    }
}
mostrarBalance();

// Crea una función flecha simularSemana().
// Dentro, usa un ciclo for que se repita 7 veces. En cada iteración, llama a registrarGasto con un monto fijo (ej. 50).

const simularSemana = () => {
    for (let dia = 1; dia <= 7; dia++) {
        registrarGasto(50);
    }
}
simularSemana();

// Condicional if/else if/else: Basado en el saldo, muestra mensajes como "Tu salud financiera es excelente", "puedes mejorar" o "Alerta: fondos bajos".
// switch: Basado en rangos de gastosTotales, muestra mensajes como "Has gastado mucho", "Tus gastos son moderados" o "Has sido muy cuidadoso".

function diagnosticoFinanciero() {
     if (saldo > 1000000) {
        console.log("Tu salud financiera es excelente.");
    } else
        if (saldo > 500000) {
        console.log("Puedes mejorar tu salud financiera.");
    } else {
        console.log("Alerta: fondos bajos.");
    }

    switch (true) {
        case (gastosTotales > 100000):
            console.log("Has gastado mucho.");
            break;
        case (gastosTotales > 50000):
            console.log("Tus gastos son moderados.");
            break;
        default:
            console.log("Has sido muy cuidadoso con tus gastos.");
    }
}
simularSemana();
diagnosticoFinanciero();

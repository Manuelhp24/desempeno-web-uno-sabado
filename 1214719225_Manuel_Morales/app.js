//En app.js, pide al usuario su nombre con un prompt y guárdalo en una variable nombreUsuario.
// Declara otras dos variables globales: saldo (inicia en 1000) y gastosTotales (inicia en 0).

let nombreUsuario = prompt("Bienvenidos a tu APP de control de gastos, Por favor ingresa tu nombre:");
let saldo = 1000;
let gastosTotales = 0;

//Desarrolla una función declarativa llamada mostrarBalance().
// No recibirá parámetros.
// Su tarea será mostrar en la consola el estado financiero actual. Ej: "Hola, [Nombre], tu saldo es de: $1000. Has gastado: $0.".
function mostrarBalance() {
    console.log(`Hola, ${nombreUsuario}, tu saldo es de: $${saldo}. Has gastado: $${gastosTotales}.`);
}


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


// Crea una función flecha simularSemana().
// Dentro, usa un ciclo for que se repita 7 veces. En cada iteración, llama a registrarGasto con un monto fijo (ej. 50).

const simularSemana = () => {
    for (let dia = 1; dia <= 7; dia++) {
        registrarGasto(50);
    }
}


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
    }
}


// Fase 4: El Menú Interactivo (Ciclo while)
// Finalmente, integraremos todo en un menú principal que le dé el control al usuario.

// Crea la función principal de la aplicación:

// Desarrolla una función declarativa iniciarApp(). Toda la lógica del menú irá dentro de esta función.
// Dentro, crea un ciclo while (true) para que el menú se muestre de forma continua.
function iniciarApp() {
    while (true) {
        let opcion = prompt("Selecciona una opción:\n1. Registrar ingreso \n2. Registrar gasto \n3. Simular una Semana de Gastos \n4. Ver Diagnóstico Financiero \n5. Mostrar Balance Actual \n6. Salir");
        switch (opcion) {
            case "1":
                mostrarBalance();
                break;
            case "2":
                let ingreso = parseFloat(prompt("Ingresa el monto del ingreso:"));
                registrarIngreso(ingreso);
                break;
            case "3":
                let gasto = parseFloat(prompt("Ingresa el monto del gasto:"));
                registrarGasto(gasto);
                break;
            case "4":
                simularSemana();
                break;
            case "5":
                diagnosticoFinanciero();
                break;
            case "6":
                alert("Gracias por usar la app. ¡Hasta luego!");
                return; 
            default:
                alert("Opción no válida. Por favor, selecciona una opción válida.");
        }
    }
}

iniciarApp();

let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
let saldo = 1000;
let gastosTotales = 0;

function mostrarBalance() {
    let nombreUsuario = obtenerNombreUsuario();
    console.log(`Hola, ${nombreUsuario}, tu saldo es de: $${saldo}. Has gastado: $${gastosTotales}.`);
}
mostrarBalance();



const registrarIngreso = function(montoIngreso) {
    saldo += montoIngreso;
    console.log(`Ingreso de $${montoIngreso} registrado. Nuevo saldo: $${saldo}.`);
}

const registrarGasto = (montoGasto) => {
    if (montoGasto <= saldo) {
        saldo -= montoGasto;
        gastosTotales += montoGasto;
        console.log(`Gasto de $${montoGasto} registrado. Nuevo saldo: $${saldo}.`);
    } else {
        console.log("Fondos insuficientes.");
    }
}
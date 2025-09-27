let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
let saldo = 1000;
let gastosTotales = 0;

function mostrarBalance() {
    let nombreUsuario = obtenerNombreUsuario();
    console.log(`Hola, ${nombreUsuario}, tu saldo es de: $${saldo}. Has gastado: $${gastosTotales}.`);
}
mostrarBalance();

//Declaración de variables

var nombreUsuario = 'Carla Girardini';
var saldoCuenta = 40000;
var limiteExtraccion = 2000;

var verificacionNull;
var verificacionNaN;
var verificacionSaldo;
var verificacionBilletes;
var verificacionLimite;
var verificacionPositivo;
var verificacionCero;
var verificacionLongitud;
var verificacionCorta;

var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var password = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

iniciarSesion();

//Funciones auxiliares

function sumarDinero(montoASumar) {
    saldoCuenta += montoASumar;
}

function restarDinero(montoARestar) {
    saldoCuenta -= montoARestar;
}

function verificarNull(montoAVerificar) {
    if (montoAVerificar==null ) {
        alert('Por favor ingrese un valor');
        return (verificarNull = false);
    }
}

function verificarNaN(montoAVerificar) {
    if (isNaN(montoAVerificar)==true) {
        alert('Solo se permite ingresar números en este campo');
        return (verificacionNaN = false);
    }
}

function verificarSaldo(montoAVerificar) {
    if (montoAVerificar > saldoCuenta) {
        alert('Su saldo es insuficiente para realizar esta operación');
        return (verificacionSaldo = false);
    }
}

function verificarBilletes100(montoAVerificar) {
    if ((montoAVerificar%100)!==0) {
        alert('Monto inválido: Solo se pueden extraer billetes de $100');
        return (verificacionBilletes = false);
    }
}

function verificarLimite(montoAVerificar) {
    if (montoAVerificar>limiteExtraccion) {
        alert('Monto inválido: Supera el límite de extracción');
        return (verificacionLimite = false);
    }
}

function verificarPositivo(montoAVerificar) {
    if(montoAVerificar<0) {
        alert('Monto inválido: No se permiten valores negativos');
        return (verificacionPositivo = false);
    }
}

function verificarCero(montoAVerificar){
    if(montoAVerificar==0) {
        alert('Monto inválido: Por favor ingrese un valor positivo');
        return (verificacionCero = false);
    }
}

function verificarLongitud(valorIngresado,valorConvertido){
    /* Esta función es para verificar que la longitud del valor ingresado sea igual a la del valor convertido a número. Voy a usar esto para evitar que var = parseInt(1234) sea igual a var = parseInt(1234abc) */
    if(valorIngresado.length !== valorConvertido.length){
        alert('El valor ingresado no es correcto. Por favor ingrese solo números');
        return (verificacionLongitud = false);
    }
}

function acortarVerificacion(verificacion1,verificacion2){
    /* Esta función la hago para que la condición de algún if no sea tan larga si tiene muchos || y muchos &&, como la de pagar servicios. La pongo acá porque, si bien la estoy creando para una función en particular, tal vez pueda servir para otra. */
    
    if(verificacion1 == true && verificacion2 == true){
        verificacionCorta = true;
    }
    else{
        verificacionCorta = false;
    }
}

//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
    var nuevoLimiteString = prompt('Ingrese el nuevo límite de extracción');
    var nuevoLimite = parseInt(nuevoLimiteString);
    var nuevoLimiteConvertido = nuevoLimite.toString();
    
    verificacionNaN = true;
    verificacionNull = true;
    verificacionPositivo = true;
    verificacionNumero = true;
    verificacionLongitud = true;
    
    verificarNull(nuevoLimite);
    verificarNaN(nuevoLimite);
    verificarPositivo(nuevoLimite);
    verificarLongitud(nuevoLimiteString,nuevoLimiteConvertido);
    
    if(verificacionNull == true && verificacionNaN == true && verificacionPositivo == true && verificacionLongitud == true) {
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert('Su nuevo límite de extracción es $' + limiteExtraccion );
    }

    return;
}

function extraerDinero() {
    var montoAExtraerString = prompt('Ingrese el monto a extraer');
    var montoAExtraer = parseInt(montoAExtraerString);
    var montoAExtraerConvertido = montoAExtraer.toString();

    var saldoAnterior = saldoCuenta;

    verificacionNaN = true;
    verificacionNull = true;
    verificacionSaldo = true;
    verificacionBilletes = true;
    verificacionLimite = true;
    verificacionPositivo = true;
    verificacionCero = true;
    verificacionLongitud = true;

    /* Tengo que ver que el monto a extraer no supuere el saldo, ni el límite de extracción y que sea divisible por 100. */

    verificarNull(montoAExtraer);
    verificarNaN(montoAExtraer);
    verificarSaldo(montoAExtraer);
    verificarBilletes100(montoAExtraer);
    verificarLimite(montoAExtraer);
    verificarPositivo(montoAExtraer);
    verificarCero(montoAExtraer);
    verificarLongitud(montoAExtraerString,montoAExtraerConvertido);

    /* Si todas las verificaciones están bien, ejecuto la operación. Intenté factorizar lo que está dentro de la condición del if, pero no se ejecutaba bien la función así que explicité todos los casos */
    
    if(verificacionNull == true && verificacionNaN == true && verificacionSaldo == true && verificacionBilletes == true && verificacionLimite == true && verificacionPositivo == true && verificacionCero == true && verificacionLongitud == true){

        restarDinero(montoAExtraer);
        alert('Has extraído: $' + montoAExtraer + '\n' + 'Saldo anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoCuenta );
        actualizarSaldoEnPantalla();
    }

}

function depositarDinero() {
    var montoADepositarString = prompt('Ingrese el monto a depositar');
    var montoADepositar = parseInt(montoADepositarString);
    var montoADepositarConvertido = montoADepositar.toString();

    var saldoAnterior = saldoCuenta;

    verificacionNaN = true;
    verificacionNull = true;
    verificacionCero = true;
    verificacionPositivo = true;
    verificacionLongitud = true;

    verificarNull(montoADepositar);
    verificarNaN(montoADepositar);
    verificarCero(montoADepositar);
    verificarPositivo(montoADepositar);
    verificarLongitud(montoADepositarString,montoADepositarConvertido);

    if (verificacionNull == true && verificacionNaN == true && verificacionCero == true && verificacionPositivo == true && verificacionLongitud == true){
        sumarDinero(montoADepositar);
        alert('Has depositado: $' + montoADepositar + '\nSaldo anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoCuenta );
        actualizarSaldoEnPantalla();
    }   
}

function pagarServicio() {
    var impuestoAPagarString = prompt('Ingrese el número que corresponda al servicio que quiere pagar: \n 1 - Agua \n 2 - Teléfono \n 3 - Luz \n 4 - Internet');
    var impuestoAPagar = parseInt(impuestoAPagarString);
    var impuestoAPagarConvertido = impuestoAPagar.toString();

    var nombreImpuesto;
    var montoAPagar;

    verificacionSaldo = true;
    verificacionLongitud = true;

    verificarLongitud(impuestoAPagarString,impuestoAPagarConvertido);

    switch(impuestoAPagar){
        case 1:
            nombreImpuesto = 'Agua';
            montoAPagar = precioAgua;
        break;
        case 2:
            nombreImpuesto = 'Teléfono';
            montoAPagar = precioTelefono;
        break;
        case 3:
            nombreImpuesto = 'Luz';
            montoAPagar = precioLuz;
        break;
        case 4:
            nombreImpuesto = 'Internet';
            montoAPagar = precioInternet;
        break;
        default:
            alert('Por favor ingrese un número válido');
    }

    verificarSaldo(montoAPagar);
    acortarVerificacion(verificacionSaldo,verificacionLongitud);

    if(verificacionCorta == true && impuestoAPagar == 1 || verificacionCorta == true && impuestoAPagar == 2 || verificacionCorta == true && impuestoAPagar == 3 || verificacionCorta == true && impuestoAPagar == 4){
        saldoAnterior = saldoCuenta;
        restarDinero(montoAPagar);
        alert('Usted pagó el servicio ' + nombreImpuesto + '.\nSaldo anterior: $' + saldoAnterior + '.\nDinero descontado: $' + montoAPagar + '.\nSaldo actual: $' + saldoCuenta);
        actualizarSaldoEnPantalla();
        return;
    }
}

function transferirDinero() {
    var montoATransferirString = prompt('Por favor ingrese el monto que desea transferir');
    var montoATransferir = parseInt(montoATransferirString);
    var montoATransferirConvertido = montoATransferir.toString();

    verificacionNull = true;
    verificacionNaN = true;
    verificacionSaldo = true;
    verificacionCero = true;
    verificacionPositivo = true;
    verificacionLongitud = true;

    verificarNull(montoATransferir);
    verificarNaN(montoATransferir);
    verificarSaldo(montoATransferir);
    verificarCero(montoATransferir);
    verificarPositivo(montoATransferir);
    verificarLongitud(montoATransferirString,montoATransferirConvertido);

    if(verificacionNull == true && verificacionNaN == true && verificacionSaldo == true && verificacionCero == true && verificacionPositivo == true && verificacionLongitud == true){
        saldoAnterior=saldoCuenta;
        var cuentaAmigaString = prompt('Por favor ingrese el número de cuenta a la que quiere transferir el dinero. Recuerde que solo puede transferir a cuentas amigas. \nSus cuentas amigas son: \nCuenta amiga 1: 1234567 \nCuenta amiga 2: 7654321');
        var cuentaAmiga = parseInt(cuentaAmigaString);
        var cuentaAmigaConvertida = cuentaAmiga.toString();

        verificarLongitud(cuentaAmigaString,cuentaAmigaConvertida);

        //Verifico que la cuenta ingresada sea correcta:

        if(verificacionLongitud == true && cuentaAmiga === cuentaAmiga1 || verificacionLongitud == true && cuentaAmiga === cuentaAmiga2){
            restarDinero(montoATransferir);
            alert('Se han transferido: $' + montoATransferir + '.\nCuenta de destino: ' + cuentaAmiga);

            actualizarSaldoEnPantalla();
            return;
        }
        alert('Cuenta inválida. Recuerde que solo puede transferir dinero a cuentas amigas. Por favor inténtelo de nuevo.');
    }
}

function iniciarSesion() {
    var claveIngresadaString = prompt('Ingrese su código de seguridad');
    var claveIngresada = parseInt(claveIngresadaString);
    var claveIngresadaConvertida = claveIngresada.toString();

    verificacionLongitud = true;
    verificarLongitud(claveIngresadaString,claveIngresadaConvertida);

    if (claveIngresada !== password || verificacionLongitud !== true){
        alert('El código de seguridad ingresado es incorrecto. Se retendrá el saldo de la cuenta');
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }
    else{
        alert('Bienvenido/a ' + nombreUsuario + ' ya puede empezar a realizar operaciones.');
    }
}

// Funciones que actualizan el valor de las variables en el HTML. Estas funciones ya venían implementadas
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
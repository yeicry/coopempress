document.addEventListener('DOMContentLoaded', function() {
    const selectAccion = document.getElementById('seleccionAccion');

    selectAccion.addEventListener('change', function() {
        const seleccionado = selectAccion.value;
        const formularios = document.querySelectorAll('.formulario');

        // Ocultar todos los formularios
        formularios.forEach(formulario => {
            formulario.style.display = 'none';
        });

        // Mostrar el formulario seleccionado
        if (seleccionado === 'ahorro') {
            document.getElementById('ahorroForm').style.display = 'block';
        } else if (seleccionado === 'debito') {
            document.getElementById('debitoForm').style.display = 'block';
        }
    });

    // Evento de envío del formulario de Ahorro
    const btnAhorro = document.querySelector('#ahorroForm button');
    btnAhorro.addEventListener('click', function(event) {
        event.preventDefault();
        confirmarAhorro();
    });

    // Evento de envío del formulario de Débito
    const btnDebito = document.querySelector('#debitoForm button');
    btnDebito.addEventListener('click', function(event) {
        event.preventDefault();
        confirmarDebito();
    });
});

function confirmarAhorro() {
    const nombre = document.getElementById('nombre').value;
    const identificacion = document.getElementById('identificacion').value;
    const monto = document.getElementById('montoDeposito').value;
    const fecha = document.getElementById('fechaDeposito').value;
    const metodo = document.getElementById('metodoDeposito').value;

    alert(`Depósito Confirmado:\nNombre: ${nombre}\nIdentificación: ${identificacion}\nMonto: ${monto}\nFecha: ${fecha}\nMétodo: ${metodo}`);
}

function confirmarDebito() {
    const nombre = document.getElementById('nombreDebito').value;
    const identificacion = document.getElementById('identificacionDebito').value;
    const monto = document.getElementById('montoRetiro').value;
    const fecha = document.getElementById('fechaRetiro').value;
    const metodo = document.getElementById('metodoRetiro').value;

    alert(`Retiro Confirmado:\nNombre: ${nombre}\nIdentificación: ${identificacion}\nMonto: ${monto}\nFecha: ${fecha}\nMétodo: ${metodo}`);
}

function verSaldo() {
    const busqueda = document.getElementById('busquedaSaldo').value;

    // Simulación de búsqueda de saldo
    document.getElementById('saldoActual').textContent = "$5,000.00";
    document.getElementById('fechaSaldo').textContent = "Última actualización: 2024-07-17";
}

function buscarPrestamo() {
    const busqueda = document.getElementById('busquedaPrestamo').value;

    // Simulación de búsqueda de datos
    document.getElementById('montoPrestamo').textContent = "Monto del préstamo: $10,000.00";
    document.getElementById('fechaDesembolso').textContent = "Fecha de desembolso: 2023-01-01";
    document.getElementById('tasaInteres').textContent = "Tasa de interés: 5%";
    document.getElementById('plazoPrestamo').textContent = "Plazo del préstamo: 12 meses";
    document.getElementById('estadoPrestamo').textContent = "Estado del préstamo: Pendiente";
    document.getElementById('pagosRealizados').textContent = "Pagos realizados: $2,000.00";
    document.getElementById('totalPendiente').textContent = "Total pendiente de pago: $8,000.00";
    document.getElementById('proximoPago').textContent = "Próximo pago: $1,000.00";
    document.getElementById('cuotasPendientes').textContent = "Cuotas pendientes: 8";
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sección de Cuentas De Ahorro Y Debito cargada.');

    // Funcionalidades específicas para la sección de Facturas
    // Por ejemplo, inicializar una tabla de facturas, añadir eventos, etc.
});

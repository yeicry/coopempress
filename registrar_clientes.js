document.addEventListener('DOMContentLoaded', function() {
    const registrarClienteForm = document.getElementById('registrarClienteForm');

    if (registrarClienteForm) {
        registrarClienteForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const telefono = document.getElementById('telefono').value;
            const celular = document.getElementById('celular').value;
            const nombreNegocio = document.getElementById('nombreNegocio').value;
            const cedula = document.getElementById('cedula').value;
            const correo = document.getElementById('correo').value;
            const direccion = document.getElementById('direccion').value;
            const presupuesto = document.getElementById('presupuesto').value;
            const saldoInicial = document.getElementById('saldoInicial').value;
            const tipoCuenta = document.getElementById('tipoCuenta').value;
            const numeroCuenta = document.getElementById('numeroCuenta').value; // Se usa para mostrar pero no se genera automáticamente
            const genero = document.getElementById('genero').value;

            // Objeto con los datos del cliente
            const cliente = {
                nombre,
                apellido,
                telefono,
                celular,
                nombreNegocio,
                cedula,
                correo,
                direccion,
                presupuesto,
                saldoInicial,
                tipoCuenta,
                numeroCuenta,
                genero
            };

            // Simulación de enviar los datos a una base de datos o informe (lista simulada)
            agregarClienteAlInforme(cliente);

            // Limpiar el formulario después de registrar
            registrarClienteForm.reset();
        });
    }

    // Función para simular agregar cliente al informe (lista simulada)
    function agregarClienteAlInforme(cliente) {
        // Aquí podrías implementar la lógica para mostrar los datos del cliente en un informe
        console.log('Cliente registrado:', cliente); // Simulación de visualización en consola
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sección de Registrar Clientes cargada.');

    // Funcionalidades específicas para la sección de Registrar Clientes
    // Por ejemplo, validar el formulario de registro de clientes, etc.
});


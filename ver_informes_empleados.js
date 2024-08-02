document.addEventListener('DOMContentLoaded', function() {
    // Simulación de datos de empleado y ventas (sustituir con datos reales obtenidos del backend)
    const empleado = {
        nombre: 'María',
        apellido: 'González',
        correo: 'maria@example.com',
        direccion: 'Avenida Principal #123',
        telefono: '12345678',
        cedula: '123456789',
        puesto: 'Vendedor',
        nomina: '$2000',
        genero: 'Femenino',
        edad: '30',
        carrera: 'Administración'
    };

    const ventas = [
        { numero: 'V001', fecha: '2024-07-17', monto: '$150' },
        { numero: 'V002', fecha: '2024-07-18', monto: '$200' },
        { numero: 'V003', fecha: '2024-07-19', monto: '$180' }
    ];

    // Función para mostrar la información del empleado
    function mostrarInformacionEmpleado() {
        document.getElementById('nombreEmpleado').textContent = empleado.nombre;
        document.getElementById('apellidoEmpleado').textContent = empleado.apellido;
        document.getElementById('correoEmpleado').textContent = empleado.correo;
        document.getElementById('direccionEmpleado').textContent = empleado.direccion;
        document.getElementById('telefonoEmpleado').textContent = empleado.telefono;
        document.getElementById('cedulaEmpleado').textContent = empleado.cedula;
        document.getElementById('puestoEmpleado').textContent = empleado.puesto;
        document.getElementById('nominaEmpleado').textContent = empleado.nomina;
        document.getElementById('generoEmpleado').textContent = empleado.genero;
        document.getElementById('edadEmpleado').textContent = empleado.edad;
        document.getElementById('carreraEmpleado').textContent = empleado.carrera;
    }

    // Función para mostrar las ventas realizadas por el empleado
    function mostrarVentasEmpleado() {
        const listaVentas = document.getElementById('listaVentas');

        // Limpiar lista de ventas antes de agregar nuevas
        listaVentas.innerHTML = '';

        ventas.forEach(function(venta) {
            const li = document.createElement('li');
            li.textContent = `Número de Venta: ${venta.numero}, Fecha: ${venta.fecha}, Monto: ${venta.monto}`;
            listaVentas.appendChild(li);
        });
    }

    // Mostrar información del empleado y sus ventas al cargar la página
    mostrarInformacionEmpleado();
    mostrarVentasEmpleado();
});

function buscarEmpleado() {
    var nombreEmpleado = document.getElementById('inputBuscarEmpleado').value;
    // Aquí puedes implementar la lógica para buscar al empleado por su nombre
    // Puedes usar el valor de 'nombreEmpleado' para realizar la búsqueda correspondiente
    console.log("Buscar empleado: " + nombreEmpleado); // Placeholder para la lógica de búsqueda
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sección de Ver Informe de Empleados cargada.');

    // Funcionalidades específicas para la sección de Facturas
    // Por ejemplo, inicializar una tabla de facturas, añadir eventos, etc.
});


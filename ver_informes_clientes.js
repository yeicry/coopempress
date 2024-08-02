document.addEventListener('DOMContentLoaded', function() {
    // Datos simulados de clientes y facturas
    const clientes = [
        {
            nombre: 'Ana',
            apellido: 'Martínez',
            telefono: '23456789',
            celular: '67890123',
            nombreNegocio: 'Cafetería Buen Sabor',
            cedula: '234567890',
            correo: 'ana@example.com',
            direccion: 'Avenida Central #789',
            genero: 'Femenino',
            facturas: [
                { numero: 'F004', fecha: '2024-07-20', monto: '$120' },
                { numero: 'F005', fecha: '2024-07-21', monto: '$180' },
                { numero: 'F006', fecha: '2024-07-22', monto: '$150' }
            ]
        },
        {
            nombre: 'Luis',
            apellido: 'García',
            telefono: '98765432',
            celular: '12345678',
            nombreNegocio: 'Librería El Saber',
            cedula: '876543210',
            correo: 'luis@example.com',
            direccion: 'Calle Falsa #123',
            genero: 'Masculino',
            facturas: [
                { numero: 'F007', fecha: '2024-07-25', monto: '$200' },
                { numero: 'F008', fecha: '2024-07-26', monto: '$220' }
            ]
        }
    ];

    const searchInput = document.getElementById('searchCliente');
    const searchButton = document.getElementById('btnBuscarCliente');

    // Función para mostrar la información del cliente
    function mostrarInformacionCliente(cliente) {
        document.getElementById('nombreCliente').textContent = cliente.nombre;
        document.getElementById('apellidoCliente').textContent = cliente.apellido;
        document.getElementById('telefonoCliente').textContent = cliente.telefono;
        document.getElementById('celularCliente').textContent = cliente.celular;
        document.getElementById('nombreNegocioCliente').textContent = cliente.nombreNegocio;
        document.getElementById('cedulaCliente').textContent = cliente.cedula;
        document.getElementById('correoCliente').textContent = cliente.correo;
        document.getElementById('direccionCliente').textContent = cliente.direccion;
        document.getElementById('generoCliente').textContent = cliente.genero;
    }

    // Función para mostrar las facturas del cliente
    function mostrarFacturasCliente(facturas) {
        const listaFacturas = document.getElementById('listaFacturas');
        listaFacturas.innerHTML = '';

        facturas.forEach(function(factura) {
            const li = document.createElement('li');
            li.textContent = `Número de Factura: ${factura.numero}, Fecha: ${factura.fecha}, Monto: ${factura.monto}`;
            listaFacturas.appendChild(li);
        });
    }

    // Función para buscar y mostrar un cliente por nombre
    function buscarCliente(nombre) {
        const cliente = clientes.find(cliente => cliente.nombre.toLowerCase() === nombre.toLowerCase());

        if (cliente) {
            mostrarInformacionCliente(cliente);
            mostrarFacturasCliente(cliente.facturas);
        } else {
            // Limpiar la información si no se encuentra el cliente
            document.getElementById('nombreCliente').textContent = 'Cliente no encontrado';
            document.getElementById('apellidoCliente').textContent = '';
            document.getElementById('telefonoCliente').textContent = '';
            document.getElementById('celularCliente').textContent = '';
            document.getElementById('nombreNegocioCliente').textContent = '';
            document.getElementById('cedulaCliente').textContent = '';
            document.getElementById('correoCliente').textContent = '';
            document.getElementById('direccionCliente').textContent = '';
            document.getElementById('generoCliente').textContent = '';
            document.getElementById('listaFacturas').innerHTML = '';
        }
    }

    // Manejar el evento del botón de búsqueda
    searchButton.addEventListener('click', function() {
        const nombre = searchInput.value.trim();
        if (nombre) {
            buscarCliente(nombre);
        } else {
            alert('Por favor, ingrese un nombre para buscar.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sección de Ver Informes de Clientes cargada.');

    // Funcionalidades específicas para la sección de Ver Informes de Clientes
    // Por ejemplo, cargar gráficos, tablas de informes, etc.
});
